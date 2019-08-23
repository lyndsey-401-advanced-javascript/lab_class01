'use strict';

// Vinicio - this is similar to module.exports = {};, but you are giving it an easier to use name
//allows for export to test outside of file
let validator = module.exports = {};

validator.isLessThanTen = () => {};

validator.isFunction = () => {};

validator.isObjectValid = (data, schema) => {
  //what assumptions do we have so far? 
  //data is going to be an object
  //schema will be an object that has a property called fields 

  Object.keys(schema.fields).forEach(expectedProperty => {
    if (!data.hasOwnProperty(expectedProperty)){
      return false;
    }
    console.log(data[expectedProperty]); //value
    //is the value correct
    console.log(schema.fields[expectedProperty].type); //type
    //is the value correct based on the type 
  });
  return true;
};
