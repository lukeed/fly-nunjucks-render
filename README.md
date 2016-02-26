<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> Render [Nunjucks](https://mozilla.github.io/nunjucks/) templates with Fly.

*Issues with the output should be reported on the Nunjucks [issue tracker](https://github.com/mozilla/nunjucks/issues).*

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]

## Install

```a
npm install -D fly-nunjucks-render
```

## Usage

```js
export default function* () {
  yield this.source('src/*.html')
    .nunjucks({
      base: 'src/partials',
      data: {name: 'Luke Edwards'},
      // or
      dataPath: 'src/path/to/data.json'
    })
    .target('dist');
}
```

```html
<p>Hello, {{ name }}!</p>
```

## API

#### base

Type: `string`<br>
Default: *`.`, the current working directory*

Tells _nunjucks_ where your templates live.

#### data

Type: `object`<br>
Default: *`{}`, optional*

Context data that are passed to your view templates.

#### dataPath

Type: `string`<br>
Default: *`null`, optional*

Same as `options.data`, but parses JSON from an external file. Useful for large datasets.

## License

MIT © [Luke Edwards](https://lukeed.com)

[releases]:     https://github.com/lukeed/fly-nunjucks-render/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-nunjucks-render
[npm-ver-link]: https://img.shields.io/npm/v/fly-nunjucks-render.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-nunjucks-render.svg?style=flat-square
[travis-link]:  https://travis-ci.org/lukeed/fly-nunjucks-render
[travis-badge]: http://img.shields.io/travis/lukeed/fly-nunjucks-render.svg?style=flat-square
