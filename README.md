## tips
+ 判断某个字符是否占用四个字节(判断是否是中文字符)

```bash
function is32Bit(ch) {
  return ch.codePointAt(0) > 0xFFFF;
}
```

+ deferred对象和promise对象的区别
> promise对象和 deferred对象最重要的区别，promise对象相比于 deferred对象，缺少了 .resolve和 .reject这俩函数属性  
> deferred对象返回的dtd对象可以在程序的任意地方去调用resolve或者reject函数,而返回的promise没有这两个属性,程序不会混乱

