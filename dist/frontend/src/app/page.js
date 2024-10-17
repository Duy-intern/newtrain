"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const icons_1 = require("@ant-design/icons");
const antd_1 = require("antd");
const { Header, Content, Sider } = antd_1.Layout;
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const items2 = [icons_1.UserOutlined, icons_1.LaptopOutlined, icons_1.NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: react_1.default.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});
const App = () => {
    const { token: { colorBgContainer, borderRadiusLG }, } = antd_1.theme.useToken();
    return ((0, jsx_runtime_1.jsxs)(antd_1.Layout, { children: [(0, jsx_runtime_1.jsxs)(Header, { style: { display: 'flex', alignItems: 'center' }, children: [(0, jsx_runtime_1.jsx)("div", { className: "demo-logo" }), (0, jsx_runtime_1.jsx)(antd_1.Menu, { theme: "dark", mode: "horizontal", defaultSelectedKeys: ['2'], items: items1, style: { flex: 1, minWidth: 0 } })] }), (0, jsx_runtime_1.jsxs)(antd_1.Layout, { children: [(0, jsx_runtime_1.jsx)(Sider, { width: 200, style: { background: colorBgContainer }, children: (0, jsx_runtime_1.jsx)(antd_1.Menu, { mode: "inline", defaultSelectedKeys: ['1'], defaultOpenKeys: ['sub1'], style: { height: '100%', borderRight: 0 }, items: items2 }) }), (0, jsx_runtime_1.jsxs)(antd_1.Layout, { style: { padding: '0 24px 24px' }, children: [(0, jsx_runtime_1.jsx)(antd_1.Breadcrumb, { items: [{ title: 'Home' }, { title: 'List' }, { title: 'App' }], style: { margin: '16px 0' } }), (0, jsx_runtime_1.jsx)(Content, { style: {
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                    background: colorBgContainer,
                                    borderRadius: borderRadiusLG,
                                }, children: "Content" })] })] })] }));
};
exports.default = App;
//# sourceMappingURL=page.js.map