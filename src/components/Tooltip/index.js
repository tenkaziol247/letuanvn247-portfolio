import React, { useContext } from 'react';

import './index.scss';
import { SideDrawerContext } from '../../containers/Header';

export default function Tooltip({ children, show }) {
    const { sideDrawerOpen } = useContext(SideDrawerContext);

    return (
        <div
            className={[
                'tooltip',
                show ? 'tooltip--show' : '',
                sideDrawerOpen ? 'tooltip--responsive' : '',
            ].join(' ')}
        >
            {children}
        </div>
    );
}
