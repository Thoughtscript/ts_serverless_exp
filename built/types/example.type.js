"use strict";

// Types can be combined (intersect, union, simple polymorphism, etc.)
// Can pick specific fields (think subtype)
var A = {
  id: 1
};
var C = {
  id: 1,
  name: "pronomen"
};
var E = {
  fieldA: 'message'
};
console.log(A);
console.log(C);
console.log(E);