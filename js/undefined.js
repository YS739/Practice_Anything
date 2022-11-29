// undefined

var arr1 = [undefined, 1];
var arr2 = [];
arr2[1] = 1;
//forEach
arr1.forEach(function (v, i) {
  console.log(v, i);
});
arr2.forEach(function (v, i) {
  console.log(v, i);
});
//map
arr1.map(function (v, i) {
  return v + i;
});
arr2.map(function (v, i) {
  return v + i;
});
//filter
arr1.filter(function (v) {
  return !v;
});
arr2.filter(function (v) {
  return !v;
});
//reduce
arr1.reduce(function (p, c, i) {
  return p + c + i;
}, "");
arr2.reduce(function (p, c, i) {
  return p + c + i;
}, "");
