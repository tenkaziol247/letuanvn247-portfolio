import React from 'react';

import './index.scss';

export default function SocialNetworking(props) {
    return (
        <ul className='socialNetworking'>
            <li
                className='socialNetworking__item'
                data-aos='zoom-in'
                data-aos-delay='0'
                data-aos-duration='500'
                data-aos-easing='ease-in-out'
                data-aos-once='true'
            >
                <a href='https://www.facebook.com/canopus247'>
                    <i className='fab fa-facebook-f'></i>
                </a>
            </li>
            <li
                className='socialNetworking__item'
                data-aos='zoom-in'
                data-aos-delay='0'
                data-aos-duration='500'
                data-aos-easing='ease-in-out'
                data-aos-once='true'
            >
                <a href='https://www.linkedin.com/in/le-tuan-00abb01b9'>
                    <i className='fab fa-linkedin-in'></i>
                </a>
            </li>
            <li
                className='socialNetworking__item'
                data-aos='zoom-in'
                data-aos-delay='0'
                data-aos-duration='500'
                data-aos-easing='ease-in-out'
                data-aos-once='true'
            >
                <a href='https://twitter.com/Tun02035819'>
                    <i className='fab fa-twitter'></i>
                </a>
            </li>
            <li
                className='socialNetworking__item'
                data-aos='zoom-in'
                data-aos-delay='0'
                data-aos-duration='500'
                data-aos-easing='ease-in-out'
                data-aos-once='true'
            >
                <a href='https://www.instagram.com/tenkaziol247'>
                    <i className='fab fa-instagram'></i>
                </a>
            </li>
            <li
                className='socialNetworking__item'
                data-aos='zoom-in'
                data-aos-delay='0'
                data-aos-duration='500'
                data-aos-easing='ease-in-out'
                data-aos-once='true'
            >
                <a href='https://github.com/tenkaziol247'>
                    <i className='fab fa-github'></i>
                </a>
            </li>
        </ul>
    );
}
