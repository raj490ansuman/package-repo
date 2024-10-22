import { jsx as _jsx } from "react/jsx-runtime";
import { Modal } from 'antd';
var MyModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, title = _a.title, children = _a.children;
    return (_jsx(Modal, { title: title, visible: isOpen, onCancel: onClose, footer: null, children: children }));
};
export default MyModal;
