import React, { useContext } from 'react';

import './index.scss';
import NavigationItem from './NavigationItem';
import { ScrollContext, LanguageContext } from '../../../App';

export default function NavigationBar() {
    const { sectionActive } = useContext(ScrollContext);

    const { language } = useContext(LanguageContext);

    const choiceText = (engText, vieText) => {
        if (language === 'eng') {
            return engText;
        } else {
            return vieText;
        }
    };

    return (
        <nav>
            <ul className='narvigationBar'>
                <NavigationItem
                    value={choiceText('Home', 'Trang Chủ')}
                    to='home'
                    active={sectionActive === 'home'}
                >
                    <span>
                        <i className='fa fa-home'></i>
                    </span>
                </NavigationItem>
                <NavigationItem
                    value={choiceText('About Me', 'Thông Tin')}
                    to='aboutMe'
                    active={sectionActive === 'aboutMe'}
                >
                    <span>
                        <i className='fa fa-id-card'></i>
                    </span>
                </NavigationItem>
                <NavigationItem
                    value={choiceText('Resume', 'Lý Lịch')}
                    to='resume'
                    active={sectionActive === 'resume'}
                >
                    <span>
                        <i className='fa fa-book'></i>
                    </span>
                </NavigationItem>
                <NavigationItem
                    value={choiceText('Portfolio', 'Danh Mục')}
                    to='portfolio'
                    active={sectionActive === 'portfolio'}
                >
                    <span>
                        <i className='fa fa-images'></i>
                    </span>
                </NavigationItem>
                <NavigationItem
                    value={choiceText('Contact', 'Liên Hệ')}
                    to='contact'
                    active={sectionActive === 'contact'}
                >
                    <span>
                        <i className='fa fa-envelope'></i>
                    </span>
                </NavigationItem>
            </ul>
        </nav>
    );
}
