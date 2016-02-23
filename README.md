# Measurewords-zh

> Finds the measure word for many Chinese words.

## Installation
```
$ npm install --save measurewords-zh
```

## Usage

```js
var mw = require('measurewords-zh');

mw('狗', function(err, measureWords) {
    if (err) {
        throw err;
    }
    //measureWords=> ['条','只']
});
```

## API

### measureWord(str)

#### str

Type: `string`

Get the measure word of another word.