import * as React from 'react';
import * as classNames from 'classnames';

import '../ui-form.styl';

interface FormElementRowProps {
    children?: any;
    mod?: string;
}

export class FormElementRow extends React.Component<FormElementRowProps, any> {
    render() {
        const
            { mod, children } = this.props;

        return <div
            className={classNames({
                'ui-form__row': true,
                [`ui-form__row_${mod}`]: !!mod
            })}  
        >
            {children}
        </div>;
    }
}

