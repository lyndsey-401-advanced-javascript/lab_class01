'use strict';

const validator = require('./lab/starter-code/lib/validator.js');


describe('#validator', () => {
  describe('#isLessThanTen', () => {
    test('regular cases', () => {
      expect(validator.isLessThanTen(5)).toEqual(true);
    });
  });
});

describe('#isObjectValid', () => {
  test ('regular cases', () => {
    const schema = {
      fields: {
        id: {type: 'string'}, //if there is an id it HAS to be a string
        age: {type: 'number'}, //if there is an age it HAS to be a number etc 
        favoriteToys: {type: 'object'},
      },
    };
    expect(validator.isObjectValid({id: 'kali', age: 2, favoriteToys: {}}, schema)).toEqual(true);
  })
});

