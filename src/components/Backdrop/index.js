import React from 'react';

import './index.scss';

export default function Backdrop({ show, closeBackdrop }) {
    return show && <div className='backdrop' onClick={closeBackdrop}></div>;
}
