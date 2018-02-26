## tips
+ 判断某个字符是否占用四个字节(判断是否是中文字符)

```bash
function is32Bit(ch) {
  return ch.codePointAt(0) > 0xFFFF;
}
```

