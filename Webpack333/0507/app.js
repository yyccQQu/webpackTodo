//es module
import sum from "./sun";

//commonjs
var minus = require("./minus");

//amd
require(["./muti"], function(muti) {
  console.log(muti(2, 3));
});

console.log(sum(23, 24));
console.log(minus(24, 17));
