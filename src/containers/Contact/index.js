import React, { forwardRef, useContext } from 'react';

import './index.scss';
import Title from '../../components/Title';
import AddressInfo from './AddressInfo';
import ContactForm from './ContactForm';
import { LanguageContext } from '../../App';

const Contact = forwardRef((props, ref) => {
    const { language } = useContext(LanguageContext);

    const choiceText = (engText, vieText) => {
        if (language === 'eng') {
            return engText;
        } else {
            return vieText;
        }
    };

    return (
        <section id='contact' ref={ref}>
            <div className='contact__container'>
                <Title sup={choiceText('Get in touch', 'Giữ liên lạc')}>
                    {choiceText('Contact Me', 'Liên Hệ')}
                </Title>
                <div className='contact__content'>
                    <div className='contact__left'>
                        <AddressInfo />
                    </div>
                    <div className='contact__right'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Contact;
