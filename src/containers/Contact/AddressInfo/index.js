import React, { useContext } from 'react';

import './index.scss';
import SocialNetworking from '../../../components/SocialNetworking';
import { LanguageContext } from '../../../App';

export default function AddressInfo(props) {
    const { language } = useContext(LanguageContext);

    const choiceText = (engText, vieText) => {
        if (language === 'eng') {
            return engText;
        } else {
            return vieText;
        }
    };

    return (
        <div className='addressInfo'>
            <h2
                data-aos='fade'
                data-aos-delay='0'
                data-aos-duration='500'
                data-aos-easing='ease-in-out'
                data-aos-once='true'
            >
                {choiceText('My Address Info', 'Thông Tin Địa Chỉ')}
            </h2>
            <div className='addressInfo__box'>
                <div
                    className='addressInfo__item'
                    data-aos='fade-right'
                    data-aos-delay='100'
                    data-aos-duration='500'
                    data-aos-easing='ease-in-out'
                    data-aos-once='true'
                >
                    <div className='addressInfo__item__icon'>
                        <span>
                            <i className='fa fa-map-marker-alt'></i>
                        </span>
                    </div>
                    <div>
                        <p className='addressInfo__item__header'>
                            {choiceText('Location', 'Địa chỉ')}
                        </p>
                        <p className='addressInfo__item__text'>
                            {choiceText(
                                'Nga Tu So, Dong Da, Ha Noi',
                                'Ngã Tư Sở, Đống Đa, Hà Nội',
                            )}
                        </p>
                    </div>
                </div>
                <div
                    className='addressInfo__item'
                    data-aos='fade-right'
                    data-aos-delay='200'
                    data-aos-duration='600'
                    data-aos-easing='ease-in-out'
                    data-aos-once='true'
                >
                    <div className='addressInfo__item__icon'>
                        <span>
                            <i className='fa fa-phone'></i>
                        </span>
                    </div>
                    <div>
                        <p className='addressInfo__item__header'>
                            {choiceText('Phone number', 'Số điện thoại')}
                        </p>
                        <p className='addressInfo__item__text'>039 420 9029</p>
                    </div>
                </div>
                <div
                    className='addressInfo__item'
                    data-aos='fade-right'
                    data-aos-delay='300'
                    data-aos-duration='700'
                    data-aos-easing='ease-in-out'
                    data-aos-once='true'
                >
                    <div className='addressInfo__item__icon'>
                        <span>
                            <i className='fa fa-envelope'></i>
                        </span>
                    </div>
                    <div>
                        <p className='addressInfo__item__header'>
                            {choiceText('Email address', 'Hòm thư điện tử')}
                        </p>
                        <p className='addressInfo__item__text'>
                            letuanvn247@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            <SocialNetworking />
        </div>
    );
}
