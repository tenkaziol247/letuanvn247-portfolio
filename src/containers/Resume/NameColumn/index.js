import React from 'react';

import './index.scss';

export default function NameColumn({ children }) {
    return (
        <div
            className='nameColumn'
            data-aos='fade'
            data-aos-delay='0'
            data-aos-duration='2000'
            data-aos-easing='ease'
            data-aos-once='true'
        >
            <h3>{children}</h3>
        </div>
    );
}
