// react必要的两个核心包
import React from "react";
import ReactDOM from "react-dom/client";

// 导入根组件
import App from "./App";

// 将根组件 App 挂载到 id 为 root 的 DOM 节点上
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
