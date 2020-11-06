# argos
argos，希腊神话中的百眼巨人。

主要用于异常的捕获上报。

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

