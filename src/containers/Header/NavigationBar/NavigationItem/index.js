import React from 'react';

import './index.scss';

export default function NavigationItem({ active, children, to = '#' }) {
    return (
        <li>
            <div
                className={[
                    'navigationItem',
                    active ? 'navigationItem--active' : '',
                ].join(' ')}
            >
                <div className='navigationItem__circuit'></div>
                <a
                    className={[
                        'navigationItem__link',
                        active ? 'light--large' : '',
                    ].join(' ')}
                    href={to}
                >
                    {children}
                </a>
            </div>
        </li>
    );
}
