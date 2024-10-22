// src/components/Modal.tsx
import React from 'react';
var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, title = _a.title, children = _a.children;
    if (!isOpen)
        return null;
    return (React.createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" },
        React.createElement("div", { className: "bg-white rounded-lg p-6 shadow-lg w-96" },
            React.createElement("header", { className: "flex justify-between items-center mb-4" },
                React.createElement("h2", { className: "text-xl font-semibold" }, title),
                React.createElement("button", { className: "text-gray-500", onClick: onClose }, "Close")),
            React.createElement("div", null, children))));
};
export default Modal;
