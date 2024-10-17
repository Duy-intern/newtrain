'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RegisterPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function RegisterPage() {
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [confirmPassword, setConfirmPassword] = (0, react_1.useState)('');
    const [error, setError] = (0, react_1.useState)('');
    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        console.log('Registering with:', { email, password });
        try {
            alert('Registered successfully!');
        }
        catch (error) {
            console.error('Registration failed:', error);
            setError('Registration failed. Please try again.');
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-center min-h-screen bg-gray-100", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full max-w-md p-8 space-y-8 bg-white rounded shadow", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl font-bold text-center", children: "Register" }), error && (0, jsx_runtime_1.jsx)("p", { className: "text-red-500 text-center", children: error }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleRegister, className: "space-y-6", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "email", className: "block text-sm font-medium", children: "Email" }), (0, jsx_runtime_1.jsx)("input", { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full p-2 mt-1 border rounded", required: true })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "password", className: "block text-sm font-medium", children: "Password" }), (0, jsx_runtime_1.jsx)("input", { id: "password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full p-2 mt-1 border rounded", required: true })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "confirm-password", className: "block text-sm font-medium", children: "Confirm Password" }), (0, jsx_runtime_1.jsx)("input", { id: "confirm-password", type: "password", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), className: "w-full p-2 mt-1 border rounded", required: true })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600", children: "Register" })] })] }) }));
}
//# sourceMappingURL=page.js.map