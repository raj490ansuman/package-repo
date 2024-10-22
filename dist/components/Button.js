import { jsx as _jsx } from "react/jsx-runtime";
import 'antd/dist/antd.css'; // Correctly importing Ant Design CSS
import { Button } from 'antd';
var MyButton = function (_a) {
    var label = _a.label, onClick = _a.onClick;
    return _jsx(Button, { type: "primary", onClick: onClick, children: label });
};
export default MyButton;
