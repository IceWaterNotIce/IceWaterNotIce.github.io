# IceWaterNotIce.github.io

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Add a New Page to the Site

Step 1: Create a html file in root directory of the project. For example, `[[your page name]].html`.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/icewaternotice.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>[[The website title]]</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/[[your page name]].ts"></script>
  </body>
</html>
```

Step 2: In 'vite.config.ts', add the following code to the 'pages' array.

```ts
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        [[your page name]]: path.resolve(__dirname, './[[your page name]].html'),
        },
    },
},
})
```
