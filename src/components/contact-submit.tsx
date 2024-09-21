import React from 'react';
import { ContactSubmitProps } from '../types/types';

const ContactSubmit: React.FC<ContactSubmitProps> = ({ type, message }) => {
    switch (type) {
        case 'alert-info':
        case 'alert-success':
        case 'alert-error':
            return (
                <div className="relative inline-block pl-5">
                    <div className={`${`alert ` + type + ` font-bold h-8 flex max-w-content justify-center py-0`}`}>
                        <label>{message}</label>
                    </div>
                </div>
            );
        default:
            return undefined;
    }
};

export default ContactSubmit;
