<a name="convertToDataArray"></a>

## convertToDataArray(array, [sameStructure]) ⇒ <code>Array.&lt;Array&gt;</code>

Converts array of objects structure to CSV-like array of data arrays
First element will be columns
Then as many rows as array length

### Install

Using **npm**

`npm i object-array-to-data-rows`

Using **yarn**

`yarn add object-array-to-data-rows`

### Usage

In Node

`const convertToDataArray = require('object-array-to-data-rows')`

In browser

`import * as convertToDataArray from 'object-array-to-data-rows'` 

Then `convertToDataArray(arrayToConvert, allObjectsHaveSameStructure)`

### Examples

```javascript
const array = [{a: 'this', b: 'is', c: 'a test'}, {a: 'this will', b: 'go in the', c: 'second row of data'}];

const asDataArray = convertToDataArray(array, true);

// asDataArray will be:
// [
//   ['a', 'b', 'c'], (the columns, sorted)
//   ['this', 'is', 'a test'],
//   ['this will', 'go in the', 'second row of data'],
// ]
```

### Documentation

**Kind**: global function  
**Returns**: <code>Array.&lt;Array&gt;</code> - Array of arrays

| Param           | Type                              | Default            |
| --------------- | --------------------------------- | ------------------ |
| array           | <code>Array.&lt;object&gt;</code> |                    |
| [sameStructure] | <code>boolean</code>              | <code>false</code> |
