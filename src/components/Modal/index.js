import React, { useEffect, useRef } from 'react';
import { Transition } from 'react-transition-group';

import './index.scss';
import Backdrop from '../Backdrop';

export default function Modal({ show, closeModal, children }) {
    const nodeRef = useRef(null);

    useEffect(() => {
        if (show) {
            document.body.classList.add('modalOpen');
            document.querySelector('#header').classList.add('modalOpen');
        } else {
            document.body.classList.remove('modalOpen');
            document.querySelector('#header').classList.remove('modalOpen');
        }
        return () => {
            document.body.classList.remove('modalOpen');
            document.querySelector('#header').classList.remove('modalOpen');
        };
    }, [show]);

    return (
        <>
            <Backdrop show={show} closeBackdrop={closeModal} />
            <Transition
                in={show}
                timeout={{ enter: 400, exit: 300 }}
                mountOnEnter
                unmountOnExit
                nodeRef={nodeRef}
            >
                {(state) => (
                    <div
                        className={[
                            'modal',
                            state === 'entering'
                                ? 'open'
                                : state === 'exiting'
                                ? 'close'
                                : '',
                        ].join(' ')}
                        ref={nodeRef}
                    >
                        {children}
                    </div>
                )}
            </Transition>
        </>
    );
}
