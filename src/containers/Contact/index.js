import React from 'react';

import './index.scss';
import Title from '../../components/Title';
import AddressInfo from './AddressInfo';
import ContactForm from './ContactForm';

export default function Contact(props) {
    return (
        <section id='contact'>
            <div className='contact__container'>
                <Title sup='Get In Touch'>Contact Me</Title>
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
}
