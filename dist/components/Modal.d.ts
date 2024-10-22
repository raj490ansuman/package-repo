import React from 'react';
interface MyModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}
declare const MyModal: React.FC<MyModalProps>;
export default MyModal;
