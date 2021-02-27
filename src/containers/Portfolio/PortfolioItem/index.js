import React from 'react';

import './index.scss';
import Button from '../../../components/Button';

export default function PortfolioItem({
    imageBackground,
    imageVideo,
    linkDemo,
    linkGithub,
    linkGithubBE,
    linkVideo,
    handleOpenModal,
    children,
}) {
    return (
        <div className='portfolioItem'>
            <div className='portfolioItem__wrap'>
                <div className='portfolioItem__supplement'>
                    <div className='portfolioItem__detail'>{children}</div>
                    <div
                        className={[
                            'portfolioItem__video',
                            imageVideo ? imageVideo : '',
                        ].join(' ')}
                    >
                        <div
                            className='portfolioItem__video__layer'
                            onClick={handleOpenModal}
                        >
                            <span>
                                <i className='fa fa-play-circle'></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='portfolioItem__main'>
                    <div
                        className={[
                            'portfolioItem__image',
                            imageBackground ? imageBackground : '',
                        ].join(' ')}
                    ></div>
                    <div className='portfolioItem__imageLayer'>
                        <div className='portfolioItem__action'>
                            <Button
                                component='a'
                                link={linkDemo}
                                variant='contained'
                                color='secondary'
                                light
                            >
                                Demo
                            </Button>
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
