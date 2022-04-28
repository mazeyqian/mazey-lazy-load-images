'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* Function */

/**
 * @method foo
 * @description Balabala
 * @param {String} aStr 字符串
 * @param {String} bStr 字符串
 * @return {Number} 长度
 */
function foo(aStr, bStr) {
  var aLen = aStr.length;
  var bLen = bStr.length;
  return aLen + bLen;
}

exports.foo = foo;
