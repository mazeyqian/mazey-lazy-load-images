/* Function */

/**
 * @method foo
 * @description Balabala
 * @param {String} aStr 字符串
 * @param {String} bStr 字符串
 * @return {Number} 长度
 */
export function foo(aStr: string, bStr: string): number {
  const aLen = aStr.length;
  const bLen = bStr.length;
  return aLen + bLen;
}
