import React from 'react';

import './index.scss';

export default function Button({
    children,
    component = 'button',
    handleClick = () => {},
    link = '#',
    type = 'button',
    size = 'normal',
    color = 'default',
    variant = 'text',
    disabled = false,
    fullWidth = false,
    light = false,
    ...rest
}) {
    const renderButton = () => {
        const classes = ['button'];

        if (size === 'small') {
            classes.push('button--small');
        } else if (size === 'large') {
            classes.push('button--large');
        } else {
            classes.push('button--normal');
        }

        if (variant === 'outlined') {
            classes.push('button--outlined');
        } else if (variant === 'contained') {
            classes.push('button--contained');
        } else {
            classes.push('button--text');
        }

        if (color === 'primary') {
            classes.push('button--primary');
        } else if (color === 'secondary') {
            classes.push('button--secondary');
        } else {
            classes.push('button--default');
        }

        if (light) {
            classes.push('light');
        }

        if (fullWidth) {
            classes.push('button--fullWidth');
        }

        if (disabled) {
            classes.push('button--disabled');
        }

        if (component === 'a') {
            return (
                <a className={classes.join(' ')} href={link} {...rest}>
                    {children}
                </a>
            );
        } else {
            return (
                <button
                    className={classes.join(' ')}
                    onClick={handleClick}
                    type={type}
                    disabled={disabled}
                    {...rest}
                >
                    {children}
                </button>
            );
        }
    };

    return renderButton();
}
