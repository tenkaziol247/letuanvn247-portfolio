import React, { useContext, useState } from 'react';

import './index.scss';
import { ScrollContext } from '../../../../App';
import Tooltip from '../../../../components/Tooltip';

export default function NavigationItem({ active, children, to, value }) {
    const { handleScrollToSection } = useContext(ScrollContext);
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <li>
            <div
                className={[
                    'navigationItem',
                    active ? 'navigationItem--active' : '',
                ].join(' ')}
            >
                <div className='navigationItem__circuit'></div>
                <span
                    className={[
                        'navigationItem__link',
                        active ? 'light--large' : '',
                    ].join(' ')}
                    onClick={() => handleScrollToSection(to)}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                >
                    {children}
                    <Tooltip show={showTooltip} responsive={active}>
                        {value}
                    </Tooltip>
                </span>
            </div>
        </li>
    );
}
