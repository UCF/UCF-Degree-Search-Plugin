# Degree Picker Block: Implementation Plan

## Purpose

This is not a conversion of the `[ucf-degree-picker]` shortcode. We are building a new block, a visual, step-by-step degree picker in the style of TurboTax, and the shortcode stays exactly as it is. The block also has a second job: it is our first test of building a component in React first, so that the same component could later be offered as a Puck component if we adopt Pantheon's P1. What we learn about that process matters as much as the block itself.

We will build the block inside this plugin. Blocks will ship in the plugin for their subject area rather than in one large component repository, so a site that needs to list degrees installs the degree plugin and nothing more.

## What the shortcode tells us

The shortcode is useful as a reference for data, not for code. It is three linked dropdowns (program type, then area of interest, then program) that send the visitor to the chosen degree's page. It uses two APIs on ucf.edu, and four things about that data shape the new design:

- **Program types already suit a visual first step.** `ucf-degree-search/v1/program-types` returns a two-level tree (Undergraduate → Bachelor, Minor, Certificate) with a program count on each entry. That maps directly onto cards.
- **Interests do not suit cards.** Bachelor's degrees alone have 73 interests, under official federal names like "Aerospace, Aeronautical, and Astronautical/Space Engineering." This step needs search rather than a grid, which is why it uses a typeahead (see "How the picker behaves").
- **The shortcode cuts the program list off at 30.** It requests `per_page=30` and never asks for the next page, so programs in larger categories drop out without any warning. The new block must load every page.
- **The default endpoint setting is broken.** The shortcode builds its URL from the `angular_api` option, and the default value (`search.cm.ucf.edu/api/v1`) returns 404 for these routes. The picker only works on sites where someone changed the setting by hand. The block will have its own setting for the REST API root, defaulting to `https://www.ucf.edu/wp-json/`. It is the root rather than one namespace because the picker uses two: `ucf-degree-search/v1` for program types and interests, and `wp/v2/degrees` for programs.

The typeahead answers the interest problem. The other three points are fixed in the data client.

## How the picker behaves

The picker is not a set of linked dropdowns with nicer styling. It is a three-step flow where each step narrows the list, and the visitor can leave for the full degree search at any point without losing what they've chosen. A segmented progress bar at the bottom shows how far along they are.

1. **Degree type.** Three cards: Bachelors, Masters and Doctorates, each with its program count. Minors and certificates are left out on purpose. The choices are a prop with these three as the default. When the page already answers this question, such as a masters page, a `programType` prop sets the type and the picker starts at step 2. The block and the Puck config will expose that as a setting. The cards are native radio buttons, so they behave as a radio group for keyboard and screen-reader users.
2. **Interests.** A typeahead filters the interests for the chosen degree type. The visitor can pick several, and each one shows as a removable chip before they continue. The list is short (at most about 73 entries), so we load it once and filter in the browser instead of searching on every keystroke. The input follows the ARIA combobox pattern. The button to continue stays disabled until at least one interest is chosen, and the same is true on the first step until a type is chosen. We mark it with `aria-disabled` rather than the `disabled` attribute, so keyboard and screen-reader users can still reach it and hear why it's inactive.
3. **Degrees.** The last step lists every program that matches the degree type and any of the chosen interests, as small cards that link to each degree page. For now a card shows only the degree title. We expect to add more, such as the college or a short description, so the card is its own `DegreeCard` component that takes the whole degree record as a prop. Adding a field then means changing the card, not the step around it. We tested this against the live API: `wp/v2/degrees` accepts a comma-separated `interests` value and returns programs matching any of them. For example, `accounting-and-related-services,anthropology` returned 4 bachelor's programs, 1 plus 3.

### The "Explore our Programs" link

Every step shows an "Explore our Programs" link to the degree search page, built from whatever the visitor has chosen so far. With no choice yet it goes to `https://www.ucf.edu/degree-search/`. Once a degree type is chosen it goes to that type's page, for example `/degree-search/bachelor/`. That path format comes from the routes in this plugin's Angular search app, and those URLs load on ucf.edu, but we have not confirmed that the live page filters on them.

Degree search has no interests filter today, so interests do not change the link yet. **A single function, `buildSearchUrl( { programType, interests } )` in `searchUrl.js`, is the only code that knows the degree search URL format.** It already accepts interests and ignores them. When degree search gains an interests filter, we change that one function, add tests, and the link at every step updates with no component changes. The base URL is a prop, with a default taken from the plugin's existing `form_action` setting.

### Look and feel

The picker follows the current UCF brand guidelines (ucf.edu/brand), not the Athena Framework, which is being retired. That means black as the foundation, Bold Gold (`#EDB80D`) for emphasis and actions, Horizon Blue (`#4A8FBA`) only for links on dark backgrounds, Oswald for headings, Montserrat for interface text, Roboto Mono for data such as program counts, square corners throughout, and WCAG 2.1 AA contrast with 44px touch targets. **Gold never appears as text on white or behind white text.** In the picker that means a light gray body with white cards, and a black footer band that holds the buttons, the "Explore our Programs" link and a gold progress bar. Button labels name the next step ("Choose Interests," "See Matching Programs"), as the brand's web guidance asks.

The stylesheet is self-contained and doesn't load fonts itself. On a site that already loads the brand fonts it picks them up, and elsewhere it falls back to system fonts. Every color, font and size is a custom property, so a future UCF theme can adjust the picker without overriding its selectors.

Phase 3 builds this behavior.

## Architecture

The usual difficulty with React-first blocks is not running React in the editor. It is that WordPress renders the public page with PHP, which normally means keeping the HTML in two places. The picker avoids that problem because it is an application, not page content. Nothing it shows needs to be indexed or saved in the post, so **one React component can run in the editor, on the public page, and later in Puck, with no PHP copy of its markup.**

- **The component** goes in `src/components/DegreePicker/`. It is plain React, written in TypeScript, with no WordPress imports. It receives the API address and options as props, and it fetches data through a small client of its own. Holding that boundary is what makes publishing it to npm a build step rather than a rewrite. The folder is laid out as its own package from the start, as described in "Puck and npm" below.
- **The block** goes in `src/blocks/degree-picker/`, as `block.json`, `index.tsx`, `edit.tsx`, `render.php` and `view.tsx`. The editor shows the live component as a preview, with settings in the sidebar, and links inside it don't navigate away from the editor. `render.php` outputs a container that carries the block's settings as JSON, plus a plain link to degree search for visitors without JavaScript. `view.tsx` starts the component inside that container. The API root and search URL are site-wide plugin settings, not block attributes, so an editor never has to know them. Editors can set the block to Wide or Full width on themes that support it, and the picker lays itself out by its own width rather than the window's, so it fits a 645px content column as well as a full-width band. At Full width, the gray and black bands run edge to edge while the content stays centered in the theme's content column. The component exposes that column as `--udp-content-width`, which defaults to the full width, so a Puck site can set its own.
- **TypeScript runs through the whole pipeline.** The tests run with Node's built-in TypeScript support (Node 22.18 or later), the preview uses Vite, `@wordpress/scripts` compiles `.tsx` through Babel, and `tsc` type-checks all of it and will produce the npm build. Only `block.json` and `render.php` stay outside TypeScript. Babel removes types without checking them, so `npm run typecheck` belongs in CI next to the tests.
- **It is a dynamic block.** The post saves only the block's settings, never its HTML, so later changes to the component never cause "this block contains unexpected or invalid content" on existing pages.
- **It uses the copy of React that WordPress already loads.** `@wordpress/scripts` handles this by default, so we ship no second copy.

This structure is the template for later app-like blocks. Content blocks need a different answer, which is covered in the last section.

## Build and release

The plugin ships compiled assets in the repository, and Composer installs it from GitHub releases without running npm. The block build follows the same pattern:

1. **Add `@wordpress/scripts`** next to the existing Babel and Angular builds, without changing those builds. It writes to its default `build/` directory, through `npm run build:blocks`. The root `.babelrc` belongs to the older builds, and `@wordpress/scripts` would otherwise pick it up and lose TypeScript and JSX support, so a small `webpack.config.js` gives the blocks the WordPress Babel preset instead.
2. **Remove the `build/*` and `src/components/*` lines from `.gitignore`.** Both are left over from tooling we no longer use. The first would keep the compiled block files out of the repository, and they have to be committed the way `static/` is today. The second would keep the component's source out entirely.
3. **Register the block** in a new `includes/ucf-degree-picker-block.php`, loaded from `ucf-degree-search.php`, and add the endpoint field to the plugin settings. The field is "REST API Root" under a new "Degree Picker Block" section, and "Explore our Programs" reuses the existing typeahead form action.
4. **Raise the minimum requirements.** The readme still lists WordPress 4.5.3 and PHP 5.4, and the current block format needs WordPress 6.3 or later. We should release this as 2.0.0 so that sites pinned to `^1.0` through Composer do not receive it until someone chooses to upgrade.

We have not yet confirmed which WordPress version ucf.edu runs in production. That check comes before step 4 sets the new minimum.

`npm run typecheck:blocks` checks the block and the component source it imports. `@wordpress/block-editor` ships type files without listing them in its `package.json`, so the block's `tsconfig.json` points at them directly. We should drop that mapping once the package fixes it.

## Puck and npm

The question for Puck is not how to write a Puck version of the picker. It is how to keep the component in a shape that a Puck site can install from npm, while it lives and ships inside a WordPress plugin. P1 is still in beta and we do not have its requirements, so this section covers only what we control: where the files live and how they get published. Anything P1 specifically needs gets added once we know it.

The component folder is a small npm package in its own right, with its own `package.json`, inside the plugin repository:

```
src/components/DegreePicker/
├── package.json          # name, version, exports, React as a peer dependency
├── tsconfig.json
├── README.md               # props, usage, how to run the preview
├── src/
│   ├── index.ts            # public entry: exports DegreePicker and types
│   ├── DegreePicker.tsx    # the three-step flow
│   ├── defaults.ts         # default props, shared by block.json, edit.tsx and the Puck config
│   ├── types.ts            # ProgramType, Interest, Degree, DegreeClient
│   ├── styles.css
│   ├── puck.config.ts      # Puck component entry (not written yet)
│   ├── steps/              # ProgramTypeStep, InterestStep, ResultsStep
│   ├── components/         # DegreeCard, InterestCombobox, RequestStatus
│   ├── data/               # client.ts (API calls), useRequest.ts (cancellable loading)
│   └── utils/              # searchUrl.ts, decodeEntities.ts
├── preview/                # Vite preview page: npm run dev
└── dist/                   # npm build output, not committed

Tests sit next to the file they test, as `*.test.ts`.
```

The block imports the source files directly and bundles them with `@wordpress/scripts`, so WordPress never depends on the npm package or on `dist/`. The published package exposes two entry points: `@ucfweb/degree-picker` for the component, and `@ucfweb/degree-picker/puck` for the Puck config. **The Puck config is a plain object, so the package does not need Puck as a dependency at all.** A Puck site imports the config and adds it to its own component list. React is a peer dependency, so the site supplies its own copy.

Publishing is separate from the plugin's own releases:

- **The package builds its own `dist/`.** `tsc` compiles the source to ES modules with `.d.ts` type files, rewriting the `.ts` import paths to `.js`, and the CSS is copied alongside. It runs only at publish time and does not touch the plugin's `build/` or `static/` output.
- **It has its own version number.** A change to the plugin's PHP should not force a new npm version, and a fix to the component should not force a plugin release. Package releases are tagged `degree-picker@1.0.0` so they do not collide with the plugin's `v2.0.0`-style tags.
- **A GitHub Action publishes on those tags.** It runs the tests, builds `dist/`, and runs `npm publish` from the component folder with provenance turned on. No one publishes from a laptop.

If a later component needs the same setup, this structure becomes the template. Once there are several, we can move to npm workspaces or a shared package repository. One package does not justify that yet.

## Data access from other sites

On ucf.edu the picker calls the WordPress REST API on its own domain. A Puck site on another domain would call it across sites, which depends on CORS headers and caching behavior on ucf.edu that we have not checked. **If the picker needs to work across sites, we would move its data endpoints into the Search Service rather than open up the WordPress API.** The Search Service is already meant to be called from other sites.

The component is ready for that move as long as `client.js` stays the only code that knows the shape of the API responses. The API address is already a prop. Changing the source should mean rewriting one file and changing one default, with no component changes. This is a reason to keep the data client small and tested in Phase 2, even though the WordPress block alone would not need it.

## Phases

1. **Scaffolding.** Add the build tooling and register an empty Degree Picker block that appears in the editor. We estimate a day or less, and it proves the build, commit and release path before any real work depends on it.
2. **Data client.** Write functions for program types, interests and programs, including loading every page of programs and filtering on several interests at once, plus `buildSearchUrl`, all with unit tests.
3. **Component.** Build the three steps described in "How the picker behaves," including keyboard and screen-reader support: card groups that behave as radio buttons, an accessible combobox with chips, focus moved to each new step, a Back button, and announced step changes. This is most of the work.
4. **Block wrapper.** Write the editor, render and front-end files, and decide which settings editors control.
5. **Storybook.** Add stories for the component on its own inside this plugin. This is our first look at Storybook as the catalog for components. Until then, the Vite preview in `preview/` covers day-to-day work, and the component's `client` prop lets stories use sample data instead of the live API.
6. **Package and write-up.** Add the package build and publishing workflow from "Puck and npm," publish a prerelease, and record what each layer cost. The write-up also lists what we still need to learn about P1 before a Puck site can use the component.

Phases 1 through 4 are built. The block works in the editor and on the public page of a local copy of ucf.edu, using the theme's styles and WordPress's own copy of React, with a 20 KB front-end script.

## Open questions

The steps, the interest step and the results are settled in "How the picker behaves." Two questions remain:

- **Where editors can use the block.** Our local copy of ucf.edu runs the Classic Editor plugin for every post type, so no one can insert a block there. If production matches, the block needs either the block editor turned on for at least pages, or a shortcode that renders the same container as `render.php`. We should confirm production's setup before we release.
- **Editor settings.** Editors can currently set the degree type, which skips the first step. We have not decided whether they need more, such as limiting a page to graduate programs or changing the heading level.

## What this does not test

The picker is the easy case for React-first development. It will not show what happens with a content block, such as a degree card, whose HTML has to be rendered in PHP for the public page and kept in step with the React version. We should follow this block with a small content block before we settle on a pattern for every UCF block.
