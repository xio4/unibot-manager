import * as React from 'react';
import * as classNames from 'classnames';

import '../ui-form.styl';

interface FormElementRowProps {
    error?: any;
    children?: any;
    mod?: string;
}

export class FormElementRow extends React.Component<FormElementRowProps, any> {
    render() {
        const
            { mod, children, error } = this.props;

        return <div
            className={classNames({
                'ui-form__row': true,
                'ui-form__row_error': !!error,
                [`ui-form__row_${mod}`]: !!mod
            })}  
        >
            {children}
            {error && <div className='ui-form_row_error-text'>
                {error}
            </div>}
        </div>;
    }
}

