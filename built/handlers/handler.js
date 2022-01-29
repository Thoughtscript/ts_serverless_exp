"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.example = void 0;

var example = function example(event, context) {
  var response = {
    status: 404,
    message: 'default'
  };
  console.log(event);

  try {
    response.status = 200;
    response.message = 'data';
  } catch (ex) {
    response.status = 404;
    response.message = 'error';
  }

  console.log(response);
  return response;
};

exports.example = example;