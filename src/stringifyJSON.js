// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// input { x: 5, y: 6 }
// output: "{"x":5,"y":6}"

//base case if obj is empty the return value is
//empty object string '{' + jsonString + '}';

//recursion case
//create a string var jsonString = '';
//create a copy of the passed in obj
//var clonedObj = Object.assign(clonedObj, obj);
//iterate over the keys in clonedObj using for in loop
//in each loop
//              jsonString += '"' + key + '"' + ':' + getPropertyValueInJsonFormat(clonedObj[key]);
//              delete clonedObj[key];
//              if(!isEmpty(clonedObj))
//              jsonString += ',';
//              return stringifyJSON(clonedObj);




var stringifyJSON = function(obj) {
  // your code goes here
};


//utility function
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
    return value;
  }
}
