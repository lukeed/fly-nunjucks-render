# fly-nunjucks-render [![][travis-badge]][travis-link]

<!-- <div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div> -->

> Render [Nunjucks](https://mozilla.github.io/nunjucks/) templates with Fly.

_Issues with the output should be reported on the Nunjucks [issue tracker](https://github.com/mozilla/nunjucks/issues)._

## Install

```
npm install --save-dev fly-nunjucks-render
```

## Usage

```js
exports.views = function * (fly) {
  yield fly.source('src/*.html')
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
<!-- src/index.html -->
<p>Hello, {{ name }}!</p>
```

## API

### .nunjucks(options)

Multiple [configuration options](https://mozilla.github.io/nunjucks/api.html#configure) for Nunjucks are available.

> **Important:** Please do not attempt to use the `watch` option. Instead, use `fly.watch()`.

See below for additional options specific to `fly-nunjucks-render`.

#### options.base

Type: `string`<br>
Default: `.`

Specify the location of your templates. Without this, Nunjucks will not be able to reliably compile or find your partials.

#### options.data

Type: `object`<br>
Default: `{}`

Context data that is passed to your templates. _Optional_

#### option.dataPath

Type: `string`<br>
Default: `''`

Similar to `options.data`, but is a path to an external file. Useful for large datasets. _Optional_

## License

MIT © [Luke Edwards](https://lukeed.com)

[travis-link]:  https://travis-ci.org/lukeed/fly-nunjucks-render
[travis-badge]: http://img.shields.io/travis/lukeed/fly-nunjucks-render.svg?style=flat-square
