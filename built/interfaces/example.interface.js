"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Example = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Interfaces are struct-like with typed constraints
// variable types are specified via:
var E = {
  fieldA: "example",
  fieldB: 1,
  fieldC: true
}; // interfaces can be combined with class and constructor syntax

var Example = /*#__PURE__*/_createClass(function Example(fieldA, fieldB, fieldC) {
  _classCallCheck(this, Example);

  _defineProperty(this, "fieldA", "");

  _defineProperty(this, "fieldB", 0);

  _defineProperty(this, "fieldC", false);

  this.fieldA = fieldA;
  this.fieldB = fieldB;
  this.fieldC = fieldC;
});

exports.Example = Example;
var EE = new Example('a', 3, true);
console.log(E);
console.log(EE);