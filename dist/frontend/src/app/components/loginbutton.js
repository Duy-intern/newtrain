"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginButton;
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const link_1 = require("next/link");
function LoginButton() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center", children: (0, jsx_runtime_1.jsx)(link_1.default, { href: "/login", children: (0, jsx_runtime_1.jsx)(antd_1.Button, { children: "Login" }) }) }));
}
//# sourceMappingURL=loginbutton.js.map