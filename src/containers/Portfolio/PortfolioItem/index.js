import React, { useContext, useState } from 'react';

import './index.scss';
import Button from '../../../components/Button';
import { LanguageContext } from '../../../App';

export default function PortfolioItem({
    imageBackground,
    imageVideo,
    linkDemo,
    linkGithub,
    linkGithubBE,
    handleOpenModal,
    children,
    value,
}) {
    const [summary, setSummary] = useState(false);
    const { language } = useContext(LanguageContext);

    const choiceText = (engText, vieText) => {
        if (language === 'eng') {
            return engText;
        } else {
            return vieText;
        }
    };

    const handleOpenSummary = () => {
        setSummary((prev) => !prev);
    };

    return (
        <div className='portfolioItem'>
            <div className='portfolioItem__wrap'>
                <div
                    className={[
                        'portfolioItem__supplement',
                        summary ? 'portfolioItem__supplement--open' : '',
                    ].join(' ')}
                >
                    <div className='portfolioItem__detail'>
                        {children}
                        <div className='portfolioItem__detail__action'>
                            <Button
                                variant='contained'
                                color='secondary'
                                light
                                handleClick={handleOpenSummary}
                            >
                                Back
                            </Button>
                        </div>
                    </div>
                    <div
                        className={[
                            'portfolioItem__video',
                            imageVideo ? imageVideo : '',
                        ].join(' ')}
                    >
                        <div
                            className='portfolioItem__video__layer'
                            onClick={() => handleOpenModal(value)}
                        >
                            <span>
                                <i className='fa fa-play-circle'></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    className={[
                        'portfolioItem__main',
                        summary ? 'portfolioItem__main--close' : '',
                    ].join(' ')}
                >
                    <div
                        className={[
                            'portfolioItem__image',
                            imageBackground ? imageBackground : '',
                        ].join(' ')}
                    ></div>
                    <div className='portfolioItem__imageLayer'>
                        <div className='portfolioItem__action'>
                            <span className='portfolioItem__action__switch'>
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    light
                                    handleClick={handleOpenSummary}
                                >
                                    {choiceText('Summary', 'Tóm tắt')}
                                </Button>
                            </span>
                            <span className='portfolioItem__action__video'>
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    handleClick={() => handleOpenModal(value)}
                                    light
                                >
                                    Video
                                </Button>
                            </span>
                            <span>
                                <Button
                                    component='a'
                                    link={linkDemo}
                                    variant='contained'
                                    color='secondary'
                                    light
                                >
                                    Demo
                                </Button>
                            </span>
                            <span>
                                <Button
                                    component='a'
                                    link={linkGithub}
                                    variant='outlined'
                                    color='secondary'
                                >
                                    Github
                                </Button>
                            </span>
                            {linkGithubBE && (
                                <span>
                                    <Button
                                        component='a'
                                        link={linkGithubBE}
                                        variant='outlined'
                                        color='secondary'
                                    >
                                        Github Back-end
                                    </Button>
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
