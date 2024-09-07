import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import EMailIcon from '../assets/icons/svg/email.svg';
import WhatsAppIcon from '../assets/icons/svg/whatsapp.svg';
import {
    EMAIL,
    EMAIL_URL,
    EMAILJS_PUBLIC_KEY,
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    PHONE,
    SECTIONS,
    WHATSAPP
} from '../data/data';
import AnimateVisible from '../utils/animate-visible';
import GeneralFunctions from '../utils/general-functions';
import ContactSubmit from './contact-submit';
import Heading from './heading';

const Contact = () => {
    const [submitOutput, setSubmitOutput] = useState(<ContactSubmit />);
    const [isSendingOutput, setIsSendingOutput] = useState(false);
    const form = useRef();

    const sendEmail = (e: { preventDefault: () => void; target: { reset: () => void } }) => {
        e.preventDefault();

        setIsSendingOutput(true);
        setSubmitOutput(<ContactSubmit type="alert-info" message="Sending..." />);

        emailjs
            .sendForm(
                'service_' + EMAILJS_SERVICE_ID,
                'template_' + EMAILJS_TEMPLATE_ID,
                form.current,
                EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setSubmitOutput(
                        result.text === 'OK' ? (
                            <ContactSubmit type="alert-success" message="Thanks!😁" />
                        ) : (
                            <ContactSubmit type="alert-success" message={result.text} />
                        )
                    );

                    setIsSendingOutput(false);
                },
                (error) => {
                    setSubmitOutput(<ContactSubmit type="alert-error" message={error.text} />);

                    setIsSendingOutput(false);
                }
            );

        e.target.reset();
    };

    return (
        <AnimateVisible>
            <div id="contact">
                <br />
                <br />
                <Heading heading={SECTIONS[4]} />
                <div className="mx-auto px-6 max-w-screen-md">
                    <br />
                    <br />
                    <button
                        className="transition rounded-full cursor-pointer btn btn-primary  my-2 ml-2 mr-3 lowercase"
                        onClick={() => GeneralFunctions.openInNewTab(EMAIL)}>
                        <img className="w-5 h-5" src={EMailIcon} />
                        {EMAIL_URL}
                    </button>
                    <button
                        className="transition rounded-full cursor-pointer btn btn-primary my-2 ml-2 mr-3"
                        onClick={() => GeneralFunctions.openInNewTab(WHATSAPP)}>
                        <img className="w-5 h-5" src={WhatsAppIcon} />
                        {PHONE}
                    </button>
                    <br />
                    <br />
                    <div className="flex flex-col w-full px-4 card bg-secondary text-primary-content">
                        <form action="#" className="space-y-8 my-5" ref={form} onSubmit={sendEmail.bind(this)}>
                            <div>
                                <label htmlFor="email" className="card-title font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    className="shadow-sm bg-secondary-content focus:bg-primary-content border border-gray-600 text-sm rounded-lg focus:border-primary-500 block w-full p-2.5 text-primary-focus focus:ring-primary-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="card-title font-bold mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="user_subject"
                                    className="shadow-sm bg-secondary-content focus:bg-primary-content border border-gray-600 text-sm rounded-lg focus:border-primary-500 block w-full p-2.5 text-primary-focus focus:ring-primary-500"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="card-title font-bold mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={10}
                                    className="shadow-sm bg-secondary-content focus:bg-primary-content border border-gray-600 text-sm rounded-lg focus:border-primary-500 block w-full p-2.5 text-primary-focus focus:ring-primary-500"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="transition rounded-full cursor-pointer btn glass btn-primary font-bold mb-2"
                                disabled={isSendingOutput}>
                                Submit
                            </button>
                            {submitOutput}
                        </form>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </AnimateVisible>
    );
};

export default Contact;
