const convertToDataArray = require('./index');

const TEST_ARRAY_OF_OBJECTS = [
  {
    b: 'b',
    c: 'c',
    a: 'a',
  },
  {
    b: 'b',
    c: 'c',
    a: 'a',
  },
  {
    b: 'b',
    c: 'c',
    a: 'a',
  },
  {
    a: 'a',
    c: 'c',
    b: 'b',
  },
];

const TEST_ARRAY_OF_DIFFERENT_OBJECTS = [
  {
    b: 'b',
    c: 'c',
    a: 'a',
  },
  {
    d: 'b',
    e: 'c',
    f: 'a',
  },
];

test('Correctly detect columns', () => {
  expect(convertToDataArray(TEST_ARRAY_OF_OBJECTS)[0]).toStrictEqual([
    'a',
    'b',
    'c',
  ]);
});

test('Correctly detect columns under same structure', () => {
  expect(convertToDataArray(TEST_ARRAY_OF_OBJECTS, true)[0]).toStrictEqual([
    'a',
    'b',
    'c',
  ]);
});

test('Correctly detect data rows', () => {
  expect(convertToDataArray(TEST_ARRAY_OF_OBJECTS)[1]).toStrictEqual([
    'a',
    'b',
    'c',
  ]);
});

test('Correctly detect all non-shared columns', () => {
  expect(convertToDataArray(TEST_ARRAY_OF_DIFFERENT_OBJECTS)[0]).toStrictEqual([
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ]);
});

test('Number of rows must be array length plus one', () => {
  expect(convertToDataArray(TEST_ARRAY_OF_DIFFERENT_OBJECTS).length).toEqual(TEST_ARRAY_OF_DIFFERENT_OBJECTS.length + 1);
});
