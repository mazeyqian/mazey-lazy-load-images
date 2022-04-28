# Mazey

[![NPM version][npm-image]][npm-url]
[![l][l-image]][l-url]

[npm-image]: https://img.shields.io/npm/v/mazey
[npm-url]: https://npmjs.org/package/mazey
[l-image]: https://img.shields.io/npm/l/mazey
[l-url]: https://github.com/mazeyqian/mazey

Mazey's library for front end.

## Install

You can get Mazey via [npm](https://www.npmjs.com/package/mazey).

```
npm install mazey --save
```

## Usage

### Load

Load JavaScript.

```
import { loadScript } from 'mazey';

loadScript({
  url: 'http://www.mazey.net/js/plugin/jquery/jquery-2.1.1.min.js',
  id: 'iamid', // 可选，script 标签 ID，默认无 ID
  timeout: 5000, // 可选，超时时间，默认 5000
  isDefer: false, // 可选，defer，默认 false
})
  .then(
    res => {
      console.log(`加载 JavaScript 成功: ${res}`);
    }
  )
  .catch(
    err => {
      console.error(`加载 JavaScript 失败: ${err}`)
    }
  );
```

## Develop

```
# dev
npm run dev

# build
npm run build

# documentation
npm run docs
```