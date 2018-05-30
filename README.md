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

+ 回调地狱
> 异步操作后,再次执行某些操作时候,需要依赖这次异步操作的结果,所以就需要把这次操作卸载异步操作的回调函数中,如果需要的操作有很多且都是依赖上一次操作的结果的话,则会造成各种嵌套  
> 这样的代码不仅看起来很不舒服，可读性比较差,除此之外还有比较重要的一点就是对异常的捕获无法支持。


### SPA 过 jwt Token 登录认证 学习

### nginx 接收监听的端口发过来的请求,一般是前端,然后代理到后端服务的端口, nice

### JWT 好多问题都没有解决啊 难受

### http/2 server push  并不是 websocket 那种后端推送啊,只是可以推送为请求的静态资源,还是有问题啊
