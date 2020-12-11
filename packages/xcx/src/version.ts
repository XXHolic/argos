const packageMsg = require("../package.json");
const { name, dependencies } = packageMsg;
// 先编译好，再发布，自动会改变版本号，所以此处版本要手动同步到下一次发布的版本
export const SDK_MSG = { name, dependencies, version: "1.0.6" };
