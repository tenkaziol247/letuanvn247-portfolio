import React from 'react';

import './index.scss';
import SocialNetworking from '../../../components/SocialNetworking';

export default function AddressInfo(props) {
    return (
        <div className='addressInfo'>
            <h2
                data-aos='fade'
                data-aos-delay='0'
                data-aos-duration='500'
                data-aos-easing='ease-in-out'
                data-aos-once='true'
            >
                My Address Info
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
                        <p className='addressInfo__item__header'>Location</p>
                        <p className='addressInfo__item__text'>
                            Thanh Xuan, Ha Noi
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
                            Phone Number
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
                            Email Address
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
