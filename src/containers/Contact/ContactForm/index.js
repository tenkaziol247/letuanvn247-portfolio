import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import './index.scss';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Loader from '../../../components/Loader';
import { LanguageContext } from '../../../App';

const validationSchema = yup.object({
    name: yup.string().required('Your name is required.'),
    email: yup
        .string()
        .email('Invalid email address')
        .required('Your email is required.'),
    phone: yup.number(),
    subject: yup.string(),
    message: yup.string().required('Your message is required'),
});

const URL =
    'https://letuanvn247-portfolio-default-rtdb.firebaseio.com/contacts.json';

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const { language } = useContext(LanguageContext);

    const choiceText = (engText, vieText) => {
        if (language === 'eng') {
            return engText;
        } else {
            return vieText;
        }
    };

    const handleSendContact = (values) => {
        setLoading(true);
        axios
            .post(URL, values)
            .then((response) => {
                setLoading(false);
                formik.resetForm();
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        },
        validationSchema,
        onSubmit: (values) => {
            handleSendContact(values);
        },
    });

    return (
        <>
            <div
                className='contactForm'
                data-aos='fade'
                data-aos-delay='300'
                data-aos-duration='700'
                data-aos-easing='ease-in-out'
                data-aos-once='true'
            >
                <h2>{choiceText('Contact Form', 'Mẫu Liên Lạc')}</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className='contactForm__item'>
                        <Input
                            fullWidth
                            type='text'
                            placeholder={choiceText('Your name', 'Tên của bạn')}
                            name='name'
                            id='name'
                            value={formik.values.name}
                            isError={
                                formik.touched.name &&
                                Boolean(formik.errors.name)
                            }
                            errorMessage={
                                formik.touched.name && formik.errors.name
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className='contactForm__item'>
                        <Input
                            fullWidth
                            type='email'
                            name='email'
                            id='email'
                            placeholder={choiceText(
                                'Your email',
                                'Email của bạn',
                            )}
                            value={formik.values.email}
                            isError={
                                formik.touched.email &&
                                Boolean(formik.errors.email)
                            }
                            errorMessage={
                                formik.touched.email && formik.errors.email
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className='contactForm__item'>
                        <Input
                            fullWidth
                            type='text'
                            name='phone'
                            id='phone'
                            placeholder={choiceText(
                                'Phone number',
                                'Số điện thoại của bạn',
                            )}
                            value={formik.values.phone}
                            isError={
                                formik.touched.phone &&
                                Boolean(formik.errors.phone)
                            }
                            errorMessage={
                                formik.touched.phone && formik.errors.phone
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className='contactForm__item'>
                        <Input
                            fullWidth
                            type='text'
                            name='subject'
                            id='subject'
                            placeholder={choiceText(
                                'Write a subject',
                                'Tiêu đề',
                            )}
                            value={formik.values.subject}
                            isError={
                                formik.touched.subject &&
                                Boolean(formik.errors.subject)
                            }
                            errorMessage={
                                formik.touched.subject && formik.errors.subject
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className='contactForm__item--area'>
                        <Input
                            textarea
                            fullWidth
                            name='message'
                            id='message'
                            cols='30'
                            rows='10'
                            placeholder={choiceText(
                                'Your message',
                                'Tin nhắn của bạn',
                            )}
                            value={formik.values.message}
                            isError={
                                formik.touched.message &&
                                Boolean(formik.errors.message)
                            }
                            errorMessage={
                                formik.touched.message && formik.errors.message
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        ></Input>
                    </div>
                    <div className='contactForm__item--button'>
                        <Button
                            type='submit'
                            variant='contained'
                            color='secondary'
                            light
                        >
                            {choiceText('SUBMIT', 'GỬI')}
                        </Button>
                    </div>
                </form>
            </div>
            {loading && <Loader />}
        </>
    );
}
