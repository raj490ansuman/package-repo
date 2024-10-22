import React from 'react';
import 'antd/dist/antd.css';
interface MyButtonProps {
    label: string;
    onClick: () => void;
}
declare const MyButton: React.FC<MyButtonProps>;
export default MyButton;
