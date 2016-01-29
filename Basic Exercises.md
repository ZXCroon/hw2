# Basic Exercises
**1**  前者是函数声明，预编译阶段解析器便会读取并进行函数提升，所以其调用语句可以放在任何位置；后者是函数表达式，调用语句只能放在其后。

**2**  返回值 **function** 。f函数返回值是参数函数返回值的类型，而参数函数一进入便执行`return bar`，同时在预编译阶段，由于有`function bar() {}`，bar通过函数提升被解析，所以`return bar`时相当于返回了一个函数，也即参数函数返回值的类型为函数，于是f的返回值为 **function** 。**3** 返回值 **undefined** 。此时 **foo.bar** 的作用域为 **window** ，而并没有声明名为 **bar** 的全局变量，所以返回 **undefined** 。  
改法：
```
//方案1
...
(function() {
  return typeof foo.bar();
})();

//方案2
...
(function() {
  return typeof arguments[0].call(foo);
})(foo.bar);
```

**4** a[1]为 **undefined** ，a[2]为 **5** 。`a = b`后，a便指向了b数组。b[1]未定义，b[2]为5，则a亦然。

**5** 顺序 **-1, -2, -3, 1, 0xFFFFF, 2, 3, 'test'** 。 **sort** 函数是先将数组中的元素施加 **toString()** 方法后得到的字符串按字典序排序（ **0xFFFFF** 转换成相应十进制数对应的字符串）。
改法：
```
function compare(value1, value2) {
  if (value1 < value2) return -1;
  if (value1 == value2) return 0;
  if (value1 > value2) return 1;
}

a = (new Array("test", 1, 2, 3, -1, -2, -3, 0xFFFFF)).sort(compare);
```