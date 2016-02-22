# Measurewords-zh

> Finds the measure word for many Chinese words.

## Installation
```
$ npm install --save measurewords-zh
```

## Usage

```js
var mw = require('measurewords-zh');

mw.measureWord('狗');
//=> ['条','只']
```

## API

### measureWord(str)

#### str

Type: `string`

Get the measure word of another word.