import React, { useContext } from 'react';

import './index.scss';
import NavigationItem from './NavigationItem';
import { ScrollContext } from '../../../App';

export default function NavigationBar() {
    const { sectionActive } = useContext(ScrollContext);

    return (
        <nav>
            <ul className='narvigationBar'>
                <NavigationItem
                    value='Home'
                    to='home'
                    active={sectionActive === 'home'}
                >
                    <span>
                        <i className='fa fa-home'></i>
                    </span>
                </NavigationItem>
                <NavigationItem
                    value='About Me'
                    to='aboutMe'
                    active={sectionActive === 'aboutMe'}
                >
                    <span>
                        <i className='fa fa-id-card'></i>
                    </span>
                </NavigationItem>
                <NavigationItem
                    value='Resume'
                    to='resume'
                    active={sectionActive === 'resume'}
                >
                    <span>
                        <i className='fa fa-book'></i>
                    </span>
                </NavigationItem>
                <NavigationItem
                    value='Portfolio'
                    to='portfolio'
                    active={sectionActive === 'portfolio'}
                >
                    <span>
                        <i className='fa fa-images'></i>
                    </span>
                </NavigationItem>
                <NavigationItem
                    value='Contact'
                    to='contact'
                    active={sectionActive === 'contact'}
                >
                    <span>
                        <i className='fa fa-envelope'></i>
                    </span>
                </NavigationItem>
            </ul>
        </nav>
    );
}
