import React from 'react';

import Title from '../../components/Title';
import Button from '../../components/Button';
import './index.scss';
import SocialNetworking from '../../components/SocialNetworking';

export default function AboutMe(props) {
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
        <section id='aboutMe'>
            <div
                className='aboutMe__container'
                data-aos='fade-up'
                data-aos-delay='0'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
                data-aos-once='true'
            >
                <Title sup='My Profile'>About Me</Title>
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
                                {renderInfoItem('Name:', 'Le Anh Tuan')}
                                {renderInfoItem(
                                    'Address:',
                                    'Thanh Xuan, Ha Noi',
                                )}
                                {renderInfoItem('Nationality:', 'Vietnamese')}
                                {renderInfoItem('Phone:', '039 420 9029')}
                                {renderInfoItem(
                                    'Email:',
                                    'letuanvn247@gmail.com',
                                )}
                            </tbody>
                        </table>
                        <SocialNetworking />
                        <div>
                            <Button
                                component='a'
                                link='#'
                                variant='outlined'
                                color='primary'
                                size='large'
                                light
                            >
                                DOWNLOAD MY CV
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
}
