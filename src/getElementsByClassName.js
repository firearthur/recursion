// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


// Implement getElementsByClassName with your own function in src/getElementsByClassName.js,
// and make the specs pass.
// You should use document.body, element.childNodes, and element.classList


//*********** my work

//create nodesWithTargetClassName = []; array to hold nodes
//create currentParent = this; to hold the current node
//create let children[] = currentParent.children to hold the children


// base case
//if the current node doesnt have currentParent.children.length < 1
//we should return nodesWithTargetClassName

//recursive
//for each child if currentChild.classList.contains(className) then push it
//into the nodesWithTargetClassName
//next call getElementsByClassName on the currentChild
//after the loop return the nodesWithTargetClassName


var getElementsByClassName = function(className) {
  // your code here

};
