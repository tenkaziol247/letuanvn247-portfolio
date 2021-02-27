import React from 'react';

import './index.scss';

export default function ResumeItem({ timeline, title, children }) {
    return (
        <div
            className='resumeItem'
            data-aos='fade'
            data-aos-delay='100'
            data-aos-duration='500'
            data-aos-easing='ease'
            data-aos-once='true'
        >
            {timeline && <div className='resumeItem__timeline'>{timeline}</div>}
            {title && <h4 className='resumeItem__title'>{title}</h4>}
            <ul className='resumeItem__text'>
                {children &&
                    React.Children.map(children, (child) => {
                        return <li>{child}</li>;
                    })}
            </ul>
        </div>
    );
}
