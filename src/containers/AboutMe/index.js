import React, { forwardRef, useContext } from 'react';

import Title from '../../components/Title';
import Button from '../../components/Button';
import './index.scss';
import SocialNetworking from '../../components/SocialNetworking';
import { LanguageContext } from '../../App';

const AboutMe = forwardRef((props, ref) => {
    const { language } = useContext(LanguageContext);

    const choiceText = (engText, vieText) => {
        if (language === 'eng') {
            return engText;
        } else {
            return vieText;
        }
    };

    const renderInfoItem = (title, info) => {
        return (
            <tr>
                <td>
                    <span className='aboutMe__info__title'>{title}</span>
                </td>
                <td>{info}</td>
            </tr>
        );
    };

    return (
        <section id='aboutMe' ref={ref}>
            <div
                className='aboutMe__container'
                data-aos='fade-up'
                data-aos-delay='0'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
                data-aos-once='true'
            >
                <Title sup={choiceText('My profile', 'Hồ sơ của tôi')}>
                    {choiceText('About Me', 'Thông Tin')}
                </Title>
                <div className='aboutMe__content'>
                    <div className='aboutMe__left'>
                        <div
                            className='aboutMe__avatar light'
                            data-aos='fade-right'
                            data-aos-delay='500'
                            data-aos-duration='500'
                            data-aos-easing='ease-in-out'
                            data-aos-once='true'
                        ></div>
                    </div>
                    <div
                        className='aboutMe__right'
                        data-aos='fade-left'
                        data-aos-delay='500'
                        data-aos-duration='500'
                        data-aos-easing='ease-in-out'
                        data-aos-once='true'
                    >
                        <table className='aboutMe_info'>
                            <tbody>
                                {renderInfoItem(
                                    choiceText('Name:', 'Họ tên:'),
                                    choiceText('Le Anh Tuan', 'Lê Anh Tuấn'),
                                )}
                                {renderInfoItem(
                                    choiceText('Address:', 'Địa chỉ:'),
                                    choiceText(
                                        'Nga Tu So, Dong Da, Ha Noi',
                                        'Ngã Tư Sở, Đống Đa, Hà Nội',
                                    ),
                                )}
                                {renderInfoItem(
                                    choiceText('Nationality:', 'Quốc tịch:'),
                                    choiceText('Vietnamese', 'Việt Nam'),
                                )}
                                {renderInfoItem(
                                    choiceText(
                                        'Phone number:',
                                        'Số điện thoại:',
                                    ),
                                    '039 420 9029',
                                )}
                                {renderInfoItem(
                                    choiceText('Email:', 'Thư điện tử:'),
                                    'letuanvn247@gmail.com',
                                )}
                            </tbody>
                        </table>
                        <SocialNetworking />
                        <div className='aboutMe__download'>
                            <Button
                                component='a'
                                link='./assets/files/cv-letuanvn247.pdf'
                                download='LeAnhTuan_CV'
                                variant='outlined'
                                color='primary'
                                size='large'
                                light
                            >
                                {choiceText('DOWNLOAD MY CV', 'TẢI CV CỦA TÔI')}
                                <span>
                                    <i className='fa fa-file-download'></i>
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default AboutMe;
