//Exercise 1
function sum() {
  var result = 0;
  for (var i = 0; i < arguments.length; ++i) {
    var temp = parseFloat(arguments[i]);
    if (isNaN(temp)) continue;
    if (temp == 0) temp = parseInt(arguments[i]);
    result = plus(result, temp);
  }
  return result;
}

function plus(value1, value2) {
  var l1 = value1.toString().split('.');
  var l2 = value2.toString().split('.');
  var r1 = (l1.length > 1? l1[1].length : 0);
  var r2 = (l2.length > 1? l2[1].length : 0);
  var M = Math.pow(10, Math.max(r1, r2));
  return M == 0? (value1 + value2) : ((value1 * M + value2 * M) / M);
}

//alert(sum('0.1', false, 0.2, true, 1, 'A', 1, 'B', 1, 'C', 1, 'D', 1, 'E', 1, 'F', 1, 'G', '0x1'));