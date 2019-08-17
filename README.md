# PcdCloud

## 技术选型

+ 框架：ui-app
+ css预处理器：less

## 开发构建步骤


## 依赖管理工具:


## 开发规范

### 代码管理规范

+ 项目代码管理采用 PR 制，请严格遵守下列要求，否则将拒绝 merge

+ 开发流程： fork 项目到私人账号下 -> clone 到本地进行开发 -> push 到私人账户 -> PR 到主库 dev 分支 -> 管理员审核并接受合并 -> 发布时管理员从 dev 合并到 master

+ 建议半小时同步一次主库 dev 分支。有重大 PR 在被合并后请记得及时 @所有人，附主库同步方法：

``` bash
# 添加主库远程源：
# $ git remote add team git@github.com:losetime/PcdCloud.git

# 同步主库 dev 分支的代码
$ git pull team dev
```

### 框架及代码规范

+ 命名要求
  - 变量、函数采用 `camelCase` 命名方式，且不能使用缩写，getBtnView(X)，getButtonView(√)
  - 在异步请求的函数内的变量可以根据后台字段酌情命名，如： `under_score_case`，以便于构建 payload
  - 普通函数的命名请使用 `动 + 宾` 的格式，如：getCategory
  - 事件回调函数请使用 `on + 目标对象 + 事件`，如 `onTimerChange`
  - 可参照 https://unbug.github.io/codelf/ 挑选合适的词语
+ 异步请求函数请加上接口作用的描述
+ 所有的异步请求一定要捕捉异常
+ 路由、API 的嵌套设计和命名要和后台模块接口保持一致（一般以后台 model 维度进行文件拆分），同时尽量保持 RESTful 风格。此外，当某个页面是基于某个 id 来确定资源的，这个 id 就可以定为 `param` 了，剩下的查询参数都应成为 `query`
+ 不要在 vue template 上有过多的业务逻辑，请尽可能多地使用 `computed`
+ 项目开发时尽量抽出可复用的组件，同时外层容器 class 名一律以 `wx-` 开头，以隔离样式的命名空间，同时，业务性较弱（即复用性较高，逻辑较简单，不依赖当前项目环境或其他组件）的组件内的样式尽量不要使用外部样式引入，以便于组件快速迁移到其他项目中。范例见 `components` 文件夹，另外，业务性较强的组件请置于 smart 目录下，和业务无关的组件请放 dumb 目录下
+ CSS 样式命名请采用 `BEM` 规范,并做如下规范
  - 组件最外层使用【组件名-wrapper】
  - block-name_modifier-name
  - block-name__element-name--modifier-name
  - block-name_modifier-name--modifier-value
  - block-name__element-name--modifier-name--modifier-value
  - 大布局需严格按规范来，细节允许有所偏差
  - 参考：http://www.fly63.com/article/detial/4330
+ 涉及到尺寸的定义，尽量使用 8 的倍数进行
+ 不准随意添加任何形式的全局对象，如 mixin，修改 Vue 原型链，挂载变量对象到 window 下
+ 未经商榷不准将任何依赖包添加进项目，以减少 dist 体积，同时不可擅自修改项目配置
+ 尽量写注释，特别是一些业务逻辑比较繁琐的流程，方便回顾的时候快速 get 到当时的想法
+ 未完成的功能写好功能结构后要加上 `TODO` 标志，格式示例： `// TODO: @小5 - 菜单支持通过链接控制显示与否`


### UI 规范

+ icon 请查看使用 https://vue.ant.design/components/icon-cn/
+ iconfont 图标统一用线条型，同时图标尺寸应保持一致，另外还要给图标一个规范标准的英文名称。

### 项目主要结构

``` bash
项目根目录
  │
  ├─.nuxt                     // Nuxt.js 构建目录
  │
  ├─components                // 组件文件夹
  │
  │
  ├─pages                     // 应用页面，按照模块划分
  │  ├─index
  │  └─user
  │     └─index.vue	
  │
  ├─static                    // 资源文件夹，存放不需要 Webpack 处理的静态资源文件
  │  └─css                 	  // 全局样式文件夹
  │     ├─global.less         // 全局样式
  │     ├─mixins.less         // Less 混合
  │     └─variables.less      // Less 样式变量
  |	 └─img 					  // 图片文件夹，需要按照模块和所属页面进行划分
  |	 └─js 					  // 中间件，工具函数文件夹
  │
  │─App.vue                   // 项目运行入口
  │
  └─nuxt.config.js            // Nuxt.js 框架配置

```
