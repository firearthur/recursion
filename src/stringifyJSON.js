// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// input { x: 5, y: 6 }
// output: "{"x":5,"y":6}"

//base case if obj is empty the return value is
//create a copy of the passed in obj
//var clonedObj = Object.assign(clonedObj, obj);
//create a string var jsonParsedFilling = '';
//empty object string '{' + jsonParsedFilling + '}';

//recursion case

//iterate over the keys in clonedObj using for in loop
//in each loop
//              jsonParsedFilling += '"' + key + '"' + ':' + getPropertyValueInJsonFormat(clonedObj[key]);
//              delete clonedObj[key];
//              if(!isEmpty(clonedObj))
//              jsonParsedFilling += ',';
//              return stringifyJSON(clonedObj);

// console.log(stringifyJSON([8,[[], 3, 4]]));

//output '[8,[[],3,4]]'



function stringifyJSON(obj) {
  // your code goes here
  //check for single values
  var singleValue = stringifySingleValues(obj);
  if(singleValue !== false){
    return singleValue;
  }

  var jsonParsedFilling = '';

  //check for arrays
  if(Array.isArray(obj)){
    jsonParsedFilling = stringifyArrays(obj);
    return '[' + jsonParsedFilling + ']';
    //
    // if(obj.length < 1){
    //   return '[' + jsonParsedFilling + ']';
    // } else {
    //   for (var i = 0; i < obj.length; i++) {
    //     if(Array.isArray(obj[i])){
    //       jsonParsedFilling += stringifyJSON(obj[i]);
    //     } else {
    //       jsonParsedFilling += stringifySingleValues(obj[i]);
    //     }
    //
    //     if(!(i === obj.length - 1)){
    //       jsonParsedFilling += ',';
    //     }
    //   }
    //   return '[' + jsonParsedFilling + ']';
    // }

  }



  //object
  // var keys = Object.keys(obj);
  // var values = Object.values(obj);
  //
  // if(keys.length < 1){
  //   return '{' + jsonParsedFilling + '}';
  // } else {
  //   for(let i = 0; i < keys.length; i++){
  //
  //     if(typeof values[i] === 'object' && values[i] !== null){
  //       jsonParsedFilling += stringifySingleValues(keys[i]) + ':';
  //       jsonParsedFilling += stringifyJSON(obj[keys[i]]);
  //
  //     } else {
  //       jsonParsedFilling += stringifySingleValues(keys[i]) + ':';
  //       jsonParsedFilling += stringifySingleValues(values[i]);
  //     }
  //
  //     if(!(i === keys.length - 1)){
  //       jsonParsedFilling += ',';
  //     }
  //   }
  //   return '{' + jsonParsedFilling + '}'
  // }

  jsonParsedFilling = stringifyObjects(obj);
  return '{' + jsonParsedFilling + '}';



  //
  // if(isEmpty(obj) && typeof obj === 'object'){
  //   stringifiedJsonObj = '{' + jsonParsedFilling + '}';
  //   return stringifiedJsonObj;
  // } else {
  //   for (var key in obj) {
  //     var clonedObj = Object.assign({}, obj);
  //     if (clonedObj.hasOwnProperty(key)) {
  //        jsonParsedFilling += '"' + key + '"' + ':' + getPropertyValueInJsonFormat(clonedObj[key]);
  //        delete clonedObj[key];
  //
  //        if(isEmpty(clonedObj)){
  //           // return '{' + jsonParsedFilling + '}';
  //
  //        } else {
  //          jsonParsedFilling += ',';
  //          return jsonParsedFilling += stringifyJSON(clonedObj);
  //         // jsonParsedFilling += stringifyJSON(clonedObj);
  //        }
  //
  //
  //     }
  //   }
  //   return '{' + jsonParsedFilling + '}';
  //
  // }

};

//utility functions

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function getPropertyValueInJsonFormat(value){
  if(typeof value === 'function' || typeof value === 'undefined'|| typeof value === 'symbol'){
    return null;

  } else {
    return '"' + value + '"';
  }
}

function stringifySingleValues(value){
  if(value === undefined){
    return undefined;
  } else if(typeof value === 'number' || value === null || typeof value === 'boolean'){
    return String(value);
  } else if(typeof value === 'string'){
    return '"' + value + '"';
  } else {
    return false;
  }
}

function stringifyObjects(obj){
  var jsonParsedFilling = '';
  var keys = Object.keys(obj);
  var values = Object.values(obj);

  if(keys.length < 1){
    return jsonParsedFilling;
  } else {
    for(let i = 0; i < keys.length; i++){

      if(typeof values[i] === 'object' && values[i] !== null){
        jsonParsedFilling += stringifySingleValues(keys[i]) + ':';
        jsonParsedFilling += stringifyJSON(obj[keys[i]]);

      } else {
        jsonParsedFilling += stringifySingleValues(keys[i]) + ':';
        jsonParsedFilling += stringifySingleValues(values[i]);
      }

      if(!(i === keys.length - 1)){
        jsonParsedFilling += ',';
      }
    }
    return jsonParsedFilling;
  }
}

function stringifyArrays(obj){
  var jsonParsedFilling = '';
  if(obj.length < 1){
    return jsonParsedFilling;
  } else {
    for (var i = 0; i < obj.length; i++) {
      if(Array.isArray(obj[i])){
        jsonParsedFilling += stringifyJSON(obj[i]);
      } else {
        jsonParsedFilling += stringifySingleValues(obj[i]);
      }

      if(!(i === obj.length - 1)){
        jsonParsedFilling += ',';
      }
    }
    return jsonParsedFilling;
  }

}
