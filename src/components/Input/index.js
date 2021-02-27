import React from 'react';

import './index.scss';

export default function Input({
    textarea = false,
    isError = false,
    errorMessage = '',
    fullWidth = false,
    ...rest
}) {
    const renderInput = () => {
        const classes = ['input'];

        if (fullWidth) {
            classes.push('input--fullWidth');
        }

        if (isError) {
            classes.push('input--error');
        }

        if (textarea) {
            classes.push('input--textarea');
            return (
                <>
                    <textarea {...rest} className={classes.join(' ')} />
                    {isError && (
                        <span className='input--errorMessage'>
                            {errorMessage}
                        </span>
                    )}
                </>
            );
        } else {
            return (
                <>
                    <input {...rest} className={classes.join(' ')} />
                    {isError && (
                        <span className='input--errorMessage'>
                            {errorMessage}
                        </span>
                    )}
                </>
            );
        }
    };

    return renderInput();
}
