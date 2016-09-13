import * as React from 'react';
import * as classNames from 'classnames';

import './ui-button.styl';

export type ButtonStyle =
    'default'
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'link';

export type ButtonSize =
    'lg'
    | 'sm'
    | 'xs';

interface UIButtonProps {
    tag?: string;
    children?: any;
    mod?: string;
    style?: string;
    type?: string;
    size?: string;
    active?: boolean;
    disabled?: boolean;
}

export const UIButton = (props: UIButtonProps) => {
    return <button
        className={classNames({
            'btn': true,
            [`btn-${props.style}`]: !!props.style,
            [`btn-${props.size}`]: !!props.size,
            'active': !!props.active,
            'disabled': !!props.disabled,
            [`ui-button_{props.mod}`]: !!props.mod
        })}
        type={props.type}
    >
        {props.children}
    </button>;
}

(UIButton as any).defaultProps = {
    style: 'default',
    type: 'button',
    tag: 'button',
    active: false,
    disabled: false,
};
