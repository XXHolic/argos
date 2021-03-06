# argos
argos，希腊神话中的百眼巨人。

主要用于异常的捕获上报，目前仅支持 React、Vue、小程序。

初版功能比较简单，完善中……

## React
### 安装
```
npm install --save @thynpm/argos
```
### 配置
尽可能早的进行初始化。
```js
import React from "react";
import ReactDOM from "react-dom";
import * as Argos from "@thynpm/argos";
import App from "./App";

Argos.init({
  url: "https://example/url"
});

ReactDOM.render(<App />, document.getElementById("root"));
```

## Vue
### 安装
```
npm install --save @thynpm/argos
```
### 配置
尽可能早的进行初始化。
```js
import Vue from "vue";
import * as Argos from "@thynpm/argos";
const { VueIntegration } = Argos;

Argos.init({
  url: "https://example/url",
  integrations: [new VueIntegration({ Vue })],
});
```

## 小程序
目前只支持非插件小程序。
### 安装
```
npm init
npm install --save @thynpm/argos-xcx
```
### 配置
尽可能早的进行初始化，在 `app.js` 中进行配置初始化。
```js
var Argos = require("@thynpm/argos-xcx");
Argos.init({
  url: "https://example/url"
});
```

## 维护发布说明
使用 [Lerna][url-lerna] 进行管理。有变动的时候，会自动检测到变化。
发布时会提示选择版本号，发布后会自动 push 到远程。
```
npm run publish
```

[url-lerna]:https://github.com/lerna/lerna

