import { jsx as _jsx } from "react/jsx-runtime";
import { Card } from 'antd';
var MyCard = function (_a) {
    var title = _a.title, content = _a.content;
    return (_jsx(Card, { title: title, style: { width: 300 }, children: _jsx("p", { children: content }) }));
};
export default MyCard;
