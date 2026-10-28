# @ucfweb/degree-picker

A three-step degree picker for UCF: choose a degree type (Bachelors, Masters or Doctorates by default), then one or more interests, then browse the matching degrees. On a page that already implies the degree type, such as a masters page, set `programType` and the picker skips the first step. It follows the current UCF brand guidelines, and the fonts (Oswald, Montserrat, Roboto Mono) come from the host page. It is plain React and TypeScript with no WordPress dependencies. The Degree Picker block in this plugin wraps it, and it is meant to be published to npm for use elsewhere, such as in Puck.

## Working on it

Run these from this folder. Node 22.18 or later is required, because the tests run TypeScript directly.

```sh
npm install
npm run dev        # preview at http://localhost:5173
npm test           # data client and URL tests
npm run typecheck  # type-check everything
```

The preview calls the live ucf.edu API, which accepts requests from localhost. To use another site's API, add `?apiRoot=https://example.edu/wp-json/` to the preview URL. To see the picker as it would appear on a masters page, add `?programType=master`.

## Usage

```tsx
import DegreePicker from '@ucfweb/degree-picker';
import '@ucfweb/degree-picker/styles.css';

<DegreePicker />;
```

| Prop        | Default                               | Purpose                                          |
| ----------- | ------------------------------------- | ------------------------------------------------ |
| `apiRoot`   | `https://www.ucf.edu/wp-json/`        | The WordPress REST API that serves degree data.  |
| `searchUrl` | `https://www.ucf.edu/degree-search/`  | Where "Explore our Programs" links.              |
| `programTypes` | Bachelors (`bachelor`), Masters (`master`), Doctorates (`doctorate`) | The choices on the first step, as `{ slug, label }`. |
| `programType` | none                               | A preset type slug, e.g. `master`. Skips the first step. |
| `client`    | the built-in client                   | Swap in sample data for previews or stories.     |

## Layout

The picker lays itself out by its own width, not the window's, using a CSS container query. In a narrow column it stacks its cards and tightens its padding, and in a wide space it puts the cards in a grid, whatever the screen size.

**Give the picker a width from its parent.** Because it sizes to its container, it can't size to its own content. Inside a normal block-level element it fills the available width, as you'd expect. Inside something that shrinks to fit its content (a flex item without a width, an `inline-block`, a float or an `auto` grid column) it collapses to almost nothing. In those places, give the parent or the picker an explicit width, such as `width: 100%`.

The picker's root element also creates its own stacking context, so content inside it can't layer above content outside it. Nothing in the picker needs to, but keep it in mind before placing overlays inside it.

### Full-bleed bands

By default the picker's content spans its full width. To run the gray and black bands edge to edge while the content stays in a centered column, for example in a full-width page section, set `--udp-content-width`:

```css
.my-full-width-section .ucf-degree-picker {
	--udp-content-width: 45rem;
}
```

The bands keep filling the picker, and the content centers at that width, keeping at least the normal side padding on small screens. The WordPress block sets this to the theme's content width when an editor chooses Full width.

## Where things live

- **`src/data/client.ts` is the only file that knows the API's response shapes.** If the data moves to the Search Service, this file changes and the components don't.
- **`src/utils/searchUrl.ts` is the only file that knows the degree search URL format.** It already accepts interests, so adding an interests filter to degree search later means changing only that function.
- **`src/styles.css` is self-contained.** Colors, sizes and the content width are custom properties on `.ucf-degree-picker`, so a theme can restyle the picker without overriding selectors.
- **`src/components/DegreeCard.tsx` renders one result.** It receives the whole degree record, so adding fields later only touches this file.
