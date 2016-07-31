/*!
 * 
 *    selectors-to-array v1.0.0
 *    Converts CSS selectors, DOM elements and NodeLists into arrays
 *    Copyright (c) 2016 Francois Chalifour
 *    https://github.com/francoischalifour/selectors-to-array
 *    MIT license
 * 
 */
!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("selectors-to-array",[],e):"object"==typeof exports?exports["selectors-to-array"]=e():r["selectors-to-array"]=e()}(this,function(){return function(r){function e(o){if(t[o])return t[o].exports;var n=t[o]={exports:{},id:o,loaded:!1};return r[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var t={};return e.m=r,e.c=t,e.p="",e(0)}([function(r,e){"use strict";function t(r){if(Array.isArray(r)){for(var e=0,t=Array(r.length);e<r.length;e++)t[e]=r[e];return t}return Array.from(r)}var o=function(r){return"string"==typeof r?[].concat(t(document.querySelectorAll(r))):r.nodeType?[r]:Array.isArray(r)?r:[].concat(t(r))};r.exports=o}])});