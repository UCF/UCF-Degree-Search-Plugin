# @ucfweb/degree-picker

A four-step degree picker for UCF: choose undergraduate or graduate, then a degree type, then one or more interests, then browse the matching degrees. It follows the current UCF brand guidelines, and the fonts (Oswald, Montserrat, Roboto Mono) come from the host page. It is plain React and TypeScript with no WordPress dependencies. The Degree Picker block in this plugin wraps it, and it is meant to be published to npm for use elsewhere, such as in Puck.

## Working on it

Run these from this folder. Node 22.18 or later is required, because the tests run TypeScript directly.

```sh
npm install
npm run dev        # preview at http://localhost:5173
npm test           # data client and URL tests
npm run typecheck  # type-check everything
```

The preview calls the live ucf.edu API, which accepts requests from localhost. To use another site's API, add `?apiRoot=https://example.edu/wp-json/` to the preview URL.

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
| `client`    | the built-in client                   | Swap in sample data for previews or stories.     |

## Where things live

- **`src/data/client.ts` is the only file that knows the API's response shapes.** If the data moves to the Search Service, this file changes and the components don't.
- **`src/utils/searchUrl.ts` is the only file that knows the degree search URL format.** It already accepts interests, so adding an interests filter to degree search later means changing only that function.
- **`src/styles.css` is self-contained.** Colors and sizes are custom properties on `.ucf-degree-picker`, so a theme can restyle the picker without overriding selectors.
- **`src/components/DegreeCard.tsx` renders one result.** It receives the whole degree record, so adding fields later only touches this file.
