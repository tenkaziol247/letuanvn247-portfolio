import React from 'react';

import './index.scss';
import NavigationBar from './NavigationBar';

export default function Header(props) {
    return (
        <header id='header'>
            <NavigationBar />
        </header>
    );
}
