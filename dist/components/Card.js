// src/components/Card.tsx
import React from 'react';
var Card = function (_a) {
    var title = _a.title, content = _a.content, footer = _a.footer;
    return (React.createElement("div", { className: "border rounded-lg p-4 shadow-md bg-white" },
        React.createElement("h3", { className: "text-lg font-bold" }, title),
        React.createElement("p", { className: "mt-2 text-gray-700" }, content),
        footer && React.createElement("div", { className: "mt-4" }, footer)));
};
export default Card;
