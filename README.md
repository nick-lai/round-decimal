# round-decimal

[![Test](https://github.com/nick-lai/round-decimal/actions/workflows/test.yml/badge.svg)](https://github.com/nick-lai/round-decimal/actions/workflows/test.yml)
[![Coverage Status](https://coveralls.io/repos/github/nick-lai/round-decimal/badge.svg?branch=main)](https://coveralls.io/github/nick-lai/round-decimal?branch=main)
[![npm](https://img.shields.io/npm/v/round-decimal)](https://www.npmjs.com/package/round-decimal)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/round-decimal)](https://bundlephobia.com/package/round-decimal)

Decimal rounding with ULP.

> **Warning**  
> Work in process

## Installation

### NPM

```bash
npm install -D round-decimal
```

### CDN

#### jsDelivr

Load `roundDecimal` from [jsDelivr](https://www.jsdelivr.com/package/npm/round-decimal).

```html
<script src="https://cdn.jsdelivr.net/npm/round-decimal"></script>
```

#### unpkg

Load `roundDecimal` from [unpkg](https://unpkg.com/round-decimal/dist/).

```html
<script src="https://unpkg.com/round-decimal"></script>
```

## Usage

### Syntax

```javascript
roundDecimal(value, minSignificantFractionDigits = 3)
```

### Description

Decimal rounding with [ULP](https://w.wiki/5xCp).

### Parameters

- `value`
  - A number.
- `minSignificantFractionDigits`
  - Minimum significant fraction digits.
  - Default: `3`

### Return value

The rounded value.

### Examples

```javascript
import roundDecimal from 'round-decimal';

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(roundDecimal(0.1 + 0.2)); // 0.3

console.log(-0.1 - 0.2); // -0.30000000000000004
console.log(roundDecimal(-0.1 - 0.2)); // -0.3

console.log(10000000000.1 + 10000000000.2); // 20000000000.300003
console.log(roundDecimal(10000000000.1 + 10000000000.2)); // 20000000000.3
console.log(roundDecimal(10000000000.1 + 10000000000.2, 6)); // 20000000000.300003

console.log(10000000000000.1 + 10000000000000.2); // 20000000000000.297
console.log(roundDecimal(10000000000000.1 + 10000000000000.2)); // 20000000000000.297
console.log(roundDecimal(10000000000000.1 + 10000000000000.2, 2)); // 20000000000000.3

console.log(roundDecimal(1.3549999999999998)); // 1.355
```

Try it out on [JSFiddle](https://jsfiddle.net/nick_lai/h09dfL5o/).

## License

[MIT](https://github.com/nick-lai/round-decimal/blob/main/LICENSE)
