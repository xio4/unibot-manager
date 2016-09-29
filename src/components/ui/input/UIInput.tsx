import * as React from 'react';
import * as classNames from 'classnames';
import { path, isNil } from 'ramda';
import { forEach, isUndefined } from 'lodash';
import { IOnElementChange } from '../form/utils/events';

import './ui-input.styl';

interface UIInputProps {
    children?: any;
    mod?: string;
    value?: any;
    onChange?: IOnElementChange;
}

export class UIInput extends React.Component<UIInputProps, any> {

    static defaultProps = {
        tag: 'form'
    };

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps: UIInputProps) {
    }

    handleChange = (event: Event) => {
    };

    handleInput = (event: Event) => {
        this.props.onChange(event);
    };

    render() {
        const 
            { value, mod } = this.props;

        return <div
            className={classNames({
                'ui-input': true,
                [`ui-input_${mod}`]: !!mod
            })}
        >
            <input 
                value={value}
                onChange={this.handleChange}
                onInput={this.handleInput}
            />
        </div>;
    }
}
