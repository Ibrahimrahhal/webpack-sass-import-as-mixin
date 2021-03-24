
<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" vspace="" hspace="25" src="https://webpack.js.org/assets/icon-square-big.svg" alt="webpack">
  </a>
</div>

# Webpack SASS Import As Mixin
Webpack loader that gives the ability to import files as a sass mixin

#### Note: this loader is still under development & not ready to be used in production 

## Getting Started

To begin, you'll need to install `webpack-sass-import-as-mixin`:

```console
npm install --save-dev webpack-sass-import-as-mixin
```

Then add the loader to your `webpack` config for sass/scss file type. For example:
**!Important:- Please make sure to put this loader as the last one**
**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss/i,
        loader: 'webpack-sass-import-as-mixin',
      },
    ],
  },
};
```
## Wrapping Your Import 
To wrap your sass modules with a mixin you need to pass a query string option to your import as the following :-

**File.SCSS**
```js
@import "some-module.scss?asMixin";
@include some-module();
```

By default the mixin name will be the same as the imported file name but if you needed to pass your own name this can be done with mixinName query param. Example:-

**File.SCSS**
```js
@import "some-module.scss?asMixin&mixinName=custom-mixin-name";
@include custom-mixin-name();
```


## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

[CONTRIBUTING](./.github/CONTRIBUTING.md)

## License

[MIT](./LICENSE)
