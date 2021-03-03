import React from 'react';

import './index.scss';

export default function Preloader(props) {
    return (
        <div className='preloader--wrap'>
            <div className='preloader'>
                <div className='preloader__left'></div>
                <div className='preloader__right'></div>
                <div className='preloader__steeringWheel'></div>
            </div>
        </div>
    );
}
