
global.window = window;
global.assert = require("chai").assert;
require('../src/data.js');
require('../src/data/pokemon/pokemon.js');
require('./data.spec.js');


const arr = [{"num":2, "str":"B", "type":["A", "B"]}, {"num":3, "str":"A", "type":["B", "C"]}, {"num":1, "str":"C", "type":["C", "A"]}, {"num":1, "str":"C", "type":["B", "A"]}];

describe('processData', () => {
  it('is an object', () => {
    expect(typeof window.processData).toBe('object');
  });

  it('is a function', () => {
    expect(typeof window.processData.filterData).toBe('function');
  });

  it('is a function', () => {
    expect(typeof window.processData.sortData).toBe('function');
  });
  
  it('returns `[{"num":2, "str":"B", "type":["A", "B"]}, {"num":3, "str":"A", "type":["B", "C"]}, {"num":1, "str":"C", "type":["B", "A"]}]`', () => {
    window.assert.deepEqual(window.processData.filterData(arr, "B"), [{"num":2, "str":"B", "type":["A", "B"]}, {"num":3, "str":"A", "type":["B", "C"]}, {"num":1, "str":"C", "type":["B", "A"]}]);
  });

  it('returns `[{"num":3, "str":"A", "type":["B", "C"]}, {"num":1, "str":"C", "type":["C", "A"]}]`', () => {
    window.assert.deepEqual(window.processData.filterData(arr, "C"), [{"num":3, "str":"A", "type":["B", "C"]}, {"num":1, "str":"C", "type":["C", "A"]}]);
  });  

}); 
