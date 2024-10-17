"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RegisterButton;
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const link_1 = require("next/link");
function RegisterButton() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center", children: (0, jsx_runtime_1.jsx)(link_1.default, { href: "/register", children: (0, jsx_runtime_1.jsx)(antd_1.Button, { children: " Register" }) }) }));
}
//# sourceMappingURL=registerbutton.js.map