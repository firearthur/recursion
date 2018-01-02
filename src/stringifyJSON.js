// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


//My recursive solution
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
    return jsonParsedFilling;

  }

// objects
  jsonParsedFilling = stringifyObjects(obj);
  return jsonParsedFilling;
};

//utility functions

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
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
    return '{' + jsonParsedFilling + '}';
  } else {
    let key;
    let stringifiable = true;
    for(let i = 0; i < keys.length; i++){
      key = keys[i];
      if(Array.isArray(values[i])){
        jsonParsedFilling += stringifyJSON(key) + ':';
        jsonParsedFilling += stringifyArrays(values[i]);

      } else if(!key || obj[key] === undefined || typeof key === 'function' || typeof obj[key] === 'function'){
          stringifiable = false;
      } else if(typeof values[i] === 'object' && values[i] !== null){
        jsonParsedFilling += stringifyJSON(key) + ':';
        jsonParsedFilling += stringifyJSON(obj[key]);

      } else {
        jsonParsedFilling += stringifyJSON(key) + ':';
        jsonParsedFilling += stringifyJSON(values[i]);
      }

      if(!(i === keys.length - 1) && stringifiable){
        jsonParsedFilling += ',';
      }
    }
    return '{' + jsonParsedFilling + '}';
  }
}

function stringifyArrays(obj){
  var jsonParsedFilling = '';
  if(obj.length < 1){
    return '[' + jsonParsedFilling + ']';
  } else {
    for (var i = 0; i < obj.length; i++) {
      if(Array.isArray(obj[i])){
        jsonParsedFilling += stringifyJSON(obj[i]);
      } else if(!Array.isArray(obj[i]) && typeof obj[i] === 'object'){
        jsonParsedFilling += stringifyObjects(obj[i]);
      } else {
        jsonParsedFilling += stringifyJSON(obj[i]);
      }

      if(!(i === obj.length - 1)){
        jsonParsedFilling += ',';
      }
    }
    return '[' + jsonParsedFilling + ']';
  }
}


// a better recursive reimplementation found online
// var stringifyJSON = function(obj) {
//
//   // null
//   if (obj === null) {
//     return "null";
//   }
//
//   // unstringifiable - functions and undefined
//   if (obj === undefined || obj.constructor === Function){
//     return;
//   }
//
//   // strings
//   if (obj.constructor === String) {
//     return '"' + obj + '"';
//   }
//
//   // arrays
//   if (obj.constructor === Array) {
//     if (obj.length) {
//       var partialJSON = [];
//
//       for (var i = 0; i < obj.length; i++) {
//         partialJSON.push(stringifyJSON(obj[i])); // recursion
//       }
//
//       return '[' + partialJSON.join(",") + ']';
//     } else {
//       return '[]';
//     }
//   }
//
//   // objects
//   if (obj.constructor === Object) {
//     var keys = Object.keys(obj);
//     if (keys.length) {
//       var partialJSON = '';
//
//       for (var i = 0; i < keys.length; i++) {
//         var key = keys[i];
//
//         if (!key || obj[key] === undefined || typeof key === 'function' || typeof obj[key] === 'function') {
//
//         } else {
//           if (i === keys.length - 1) {
//             partialJSON += stringifyJSON(key) + ':' + stringifyJSON(obj[key]); // recursion
//           } else {
//             partialJSON += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ','; // recursion
//           }
//         }
//       }
//       return '{' + partialJSON + '}';
//     } else {
//       return '{}';
//     }
//   }
//
//   // everything else (numbers, booleans, etc.)
//   return obj.toString();
//
// };
