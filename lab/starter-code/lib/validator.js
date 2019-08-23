'use strict';

// Vinicio - this is similar to module.exports = {};, but you are giving it an easier to use name
//allows for export to test outside of file

let validator = {};

validator.isLessThanTen = () => {
  if (10 - 5)
  return true;
};

validator.isFunction = () => {};

validator.isObjectValid = (data, schema) => {
  //what assumptions do we have so far? 
  //data is going to be an object
  //schema will be an object that has a property called fields 
  
  Object.keys(schema.fields).forEach(expectedProperty => { // eslint-disable-line
    if (data.hasOwnProperty(expectedProperty) === false){
    }
    console.log(data[expectedProperty]); //value
    console.log(schema.fields[expectedProperty].type); //type
    return false;
    //is the value correct based on the type 
  });
  return true;
};

module.exports = validator;
