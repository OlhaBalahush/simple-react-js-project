import React from 'react';
import './Message.scss';

const Message = ({ content }) => {
    return (
        <div className='Message'>
            {content}
        </div>
    );
};

export default Message;