# I创社员端

## 简介

| 名称 | 说明 |
| --- | --- |
| 框架 | [taro](https://taro.aotu.io/) |
| UI | [taro-ui](https://taro-ui.aotu.io/) |
| taro-cli | `npm install -g @tarojs/cli@1.2.26` |
| 项目安装 | `npm install` |
| 项目启动 | `npm run dev:weapp` |

## 版本相关



## 项目结构

### 概览

| 路径 | 说明 |
| --- | --- |
| src/app.js | 项目入口文件 |
| src/config | 全局基本配置 |
| src/components | 全局组件目录 |
| src/pages | 小程序页面目录 |
| src/assets | 图片资源目录 |
| src/constants | redux 和 项目常量目录 |
| src/styles | 样式文件目录 |

### Redex 相关

| 路径 | 说明 |
| --- | --- |
| src/store | redux store |
| src/actions | redux actions |
| src/reducers | redux reducers |
| src/constants | redux constants |

### Constants 相关

| 路径 | 说明 |
| --- | --- |
| src/constants/api.js | 接口相关配置 |
| src/constants/styles.js | 内嵌样式相关配置 |
| src/constants/message.js | 文本配置（多语言预备方案） |

### Utils 相关

| 路径 | 说明 |
| --- | --- |
| request | 封装了基础的网络请求 |
| redux | 封装了 request 中的请求为 actions |


## 编码规范

### Commit

#### 规范

* 当修复某个 bug 时尽量描述清楚，例如 `fix: 修复了下拉框读取不到数据的问题`
* 当完成摸个新功能时，例如 `feat: 增加下拉框可以多选的功能`

### Page 相关

#### 规范

* 页面的命名规则为 `资源+操作` 统一在 pages 目录下创建
* 创建完页面后在 `constants/page` 添加对应的常量

#### 原因

* 在 web 开发过程中经常进行页面跳转
* 常常会出现多个地方引用了页面路径
* 使用常量页面路径改变后只需要修改常量就可以进行路由替换

#### 例子

| 名称 | 文件名 | 常量 |
| --- | --- | --- |
| 订单列表 | pages/order/index | PAGE_ORDER_INDEX |
| 订单创建 | pages/order/create | PAGE_ORDER_CREATE |
| 订单编辑 | pages/order/edit | PAGE_ORDER_EDIT |

### 样式相关

#### 规范

* 避免出现魔术变量
* 出现需要动态改变的样式时
* 将样式写到 `constants/styles` 中

#### 原因

例如图标颜色，在 A 页面写了 `#ffffff`，在 B 页面也写了 `#ffffff` 当出现样式需要更改的时候，就需要同时修改多个页面。如果使用常量的话只需要进行常量替换。

#### 例子

| 名称 | 变量 |
| --- | --- | 
| COLOR_TEXT_SECONDARY | '#888888' |
| COLOR_TEXT_RED | '#FF4E4E' |
| COLOR_TEXT_BLUE | '#255BFF' |
| COLOR_TEXT_WHITE | '#ffffff' |

### 本地化相关

#### 规范

* 将出现的文本内容写到 `constants/locale`

#### 原因

* 开发过程中会出现非常多的文本内容
* 有时候文本会出现在许多地方
* 放在一个地方的好处是便于修改和便于扩展
