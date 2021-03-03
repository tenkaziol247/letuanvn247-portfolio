import React, { useContext } from 'react';

import './index.scss';
import { LanguageContext } from '../../App';

export default function Footer(props) {
    const { language } = useContext(LanguageContext);

    const choiceText = (engText, vieText) => {
        if (language === 'eng') {
            return engText;
        } else {
            return vieText;
        }
    };

    return (
        <footer id='footer'>
            <div className='footer__container'>
                <p>
                    {choiceText('Developed by ', 'Phát triển bởi ')}
                    <b>Tenj</b>.{' '}
                    {choiceText('Thank you !', 'Cảm ơn bạn đã đọc !')}
                </p>
            </div>
        </footer>
    );
}
