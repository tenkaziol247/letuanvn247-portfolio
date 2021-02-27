import React from 'react';

import './index.scss';
import NavigationItem from './NavigationItem';

export default function NavigationBar(props) {
    return (
        <nav>
            <ul className='narvigationBar'>
                <NavigationItem to='#home' active>
                    <span>
                        <i className='fa fa-home'></i>
                    </span>
                </NavigationItem>
                <NavigationItem to='#aboutMe'>
                    <span>
                        <i className='fa fa-id-card'></i>
                    </span>
                </NavigationItem>
            </ul>
        </nav>
    );
}
