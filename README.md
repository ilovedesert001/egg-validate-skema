# egg-validate-skema

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-validate-skema.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-validate-skema
[travis-image]: https://img.shields.io/travis/eggjs/egg-validate-skema.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-validate-skema
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-validate-skema.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-validate-skema?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-validate-skema.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-validate-skema
[snyk-image]: https://snyk.io/test/npm/egg-validate-skema/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-validate-skema
[download-image]: https://img.shields.io/npm/dm/egg-validate-skema.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-validate-skema

<!--
Description here.
-->

## Install

```bash
$ npm i egg-validate-skema --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.validateSkema = {
  enable: true,
  package: 'egg-validate-skema',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.validateSkema = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
