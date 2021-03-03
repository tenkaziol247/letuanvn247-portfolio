import React, { createContext, useState } from 'react';
import Backdrop from '../../components/Backdrop';

import './index.scss';
import NavigationBar from './NavigationBar';

export const SideDrawerContext = createContext({});

export default function Header() {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const handleSideDrawer = (value) => {
        if (value.toString() === 'true' && value.toString() === 'false') {
            setSideDrawerOpen(value);
        } else {
            setSideDrawerOpen((prev) => !prev);
        }
    };

    return (
        <SideDrawerContext.Provider value={{ sideDrawerOpen }}>
            <header id='header'>
                <div className='header__navbar'>
                    <NavigationBar />
                </div>
                <div
                    className={[
                        'header__sideDrawer',
                        sideDrawerOpen ? 'header__sideDrawer--open' : '',
                    ].join(' ')}
                >
                    <NavigationBar />
                </div>
                <div
                    className={[
                        'header__action',
                        sideDrawerOpen ? 'header__action--open' : '',
                    ].join(' ')}
                >
                    <div
                        className='header__action__button'
                        onClick={handleSideDrawer}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <Backdrop
                    show={sideDrawerOpen}
                    closeBackdrop={() => handleSideDrawer(false)}
                />
            </header>
        </SideDrawerContext.Provider>
    );
}
