import React from 'react'

const Button = ({ color, bgColor, size, text, borderRadius, icon, width, bgHoverColor, customFunc }) => {
    return (
        <button
            type='button'
            style={{ color, borderRadius, backgroundColor: bgColor }}
            className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
            onClick={customFunc}
        >
            {icon} {text}
        </button>
    );
};

export default Button;