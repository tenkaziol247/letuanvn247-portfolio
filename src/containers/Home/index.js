import React, { useContext } from 'react';

import Button from '../../components/Button';
import HomeContent from './HomeContent';
import HomeHero from './HomeHero';
import { LanguageContext } from '../../App';
import './index.scss';

export default function Home(props) {
    const { language, handleLanguage } = useContext(LanguageContext);

    return (
        <section id='home'>
            <div className='home__container'>
                <div className='home__left'>
                    <HomeHero />
                </div>
                <div className='home__right'>
                    <HomeContent />
                </div>
                <ul className='home__languageSwitch'>
                    <li>
                        <Button
                            size='small'
                            color={language === 'eng' ? 'secondary' : 'default'}
                            handleClick={() => handleLanguage('eng')}
                        >
                            ENG
                        </Button>
                    </li>
                    <li>
                        <Button
                            size='small'
                            color={language === 'vie' ? 'secondary' : 'default'}
                            handleClick={() => handleLanguage('vie')}
                        >
                            VIE
                        </Button>
                    </li>
                </ul>
                <div className='home__decor'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </section>
    );
}
