import React, { useState, useEffect } from 'react';

const MessageBox = ({ message }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className={`fixed top-5 right-3 bg-green-500 text-white px-4 py-2 rounded-md ${isVisible ? 'block' : 'hidden'}`}>
            {message}
        </div>
    );
};

export default MessageBox;
