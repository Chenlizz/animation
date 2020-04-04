/*
 * 原生httpEngin依赖$方法
 *
 * @Author: 卢冰豪
 * @Date: 2018-12-13 11:46:24
 * @Last Modified by: 卢冰豪
 * @Last Modified time: 2019-06-28 19:02:38
 */

const native$ = {
  emptyFn() {},
  isObject(obj) {
    return typeof obj === 'object';
  },
  isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  },
  type(m) {
    return typeof m;
  },
  param(data) {
    return data;
  },
  encode: JSON.stringify,
};

if (!window.$) {
  window.$ = native$;
} else {
  window.$ = { ...window.$, ...native$ };
}
