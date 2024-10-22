import React from 'react';
interface CardProps {
    title: string;
    content: string;
    footer?: React.ReactNode;
}
declare const Card: React.FC<CardProps>;
export default Card;
