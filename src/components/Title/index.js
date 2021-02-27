import React from 'react';

import './index.scss';

export default function Title({ children = 'Title', sup = 'Welcome' }) {
    return (
        <div
            className='title'
            data-aos='fade-down'
            data-aos-delay='100'
            data-aos-duration='800'
            data-aos-easing='ease-in-out'
            data-aos-once='true'
        >
            <h2>
                <span className='title__outstanding light'>
                    {children.slice(0, 2)}
                </span>
                {children.slice(2)}
                <span className='title__sup'>{sup}</span>
            </h2>
        </div>
    );
}
