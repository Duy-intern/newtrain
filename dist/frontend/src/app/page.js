"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const loginbutton_1 = require("./components/loginbutton");
const registerbutton_1 = require("./components/registerbutton");
const imagehomepage_1 = require("./components/imagehomepage");
const { Header, Content, Footer } = antd_1.Layout;
const items = new Array(5).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));
const App = () => {
    const { token: { colorBgContainer, borderRadiusLG }, } = antd_1.theme.useToken();
    return ((0, jsx_runtime_1.jsxs)(antd_1.Layout, { children: [(0, jsx_runtime_1.jsxs)(Header, { style: { display: 'flex', alignItems: 'center' }, children: [(0, jsx_runtime_1.jsx)("div", { className: "demo-logo" }), (0, jsx_runtime_1.jsx)(antd_1.Menu, { theme: "dark", mode: "horizontal", defaultSelectedKeys: ['2'], items: items, style: { flex: 1, minWidth: 0 } }), (0, jsx_runtime_1.jsx)(loginbutton_1.default, {}), (0, jsx_runtime_1.jsx)(registerbutton_1.default, {})] }), (0, jsx_runtime_1.jsxs)(Content, { style: { padding: '0 48px' }, children: [(0, jsx_runtime_1.jsxs)(antd_1.Breadcrumb, { style: { margin: '16px 0' }, children: [(0, jsx_runtime_1.jsx)(antd_1.Breadcrumb.Item, { children: "Home" }), (0, jsx_runtime_1.jsx)(antd_1.Breadcrumb.Item, { children: "List" }), (0, jsx_runtime_1.jsx)(antd_1.Breadcrumb.Item, { children: "App" })] }), (0, jsx_runtime_1.jsx)("div", { style: {
                            background: colorBgContainer,
                            minHeight: 280,
                            padding: 24,
                            borderRadius: borderRadiusLG,
                        }, children: (0, jsx_runtime_1.jsx)(imagehomepage_1.default, {}) })] }), (0, jsx_runtime_1.jsxs)(Footer, { style: { textAlign: 'center' }, children: ["Ant Design \u00A9", new Date().getFullYear(), " Created by Ant UED"] })] }));
};
exports.default = App;
//# sourceMappingURL=page.js.map