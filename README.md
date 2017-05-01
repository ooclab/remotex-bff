# remotex-bff

这是remotex的bff层

先放一个图

<img src="https://zos.alipayobjects.com/rmsportal/kfEPBCTVsDHcTsWoNVYKftxsGlQgghJr.png" height="414" width="598"/>

bff是什么，简单来说就是一个Nodejs启的服务器，用于包装服务端的api
然后给所有的客户端提供数据，从web到native app到桌面程序

同时考虑到SEO，再渲染一套PC的动态网页

## 框架简述

采用eggjs搭建

模板引擎为nunjucks

如需进一步了解，参见 [egg 文档][egg]。

### 本地开发
```bash
$ npm install
$ npm run dev
$ open http://localhost:7001/
```

### 部署

线上正式环境用 `EGG_SERVER_ENV=prod` 来启动。

```bash
$ EGG_SERVER_ENV=prod npm start
```

### 单元测试
- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 -单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


[egg]: https://eggjs.org
