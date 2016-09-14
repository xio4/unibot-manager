import * as React from 'react';
import * as classNames from 'classnames';
import { noop } from 'lodash';

import './ui-button.styl';

export type ButtonType =
    'button'
    | 'submit'
    | 'reset';

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
    | 'md'
    | 'sm'
    | 'xs';

interface UIButtonProps {
    tag?: string;
    children?: any;
    mod?: string;
    style?: ButtonStyle;
    type?: ButtonType;
    size?: ButtonSize;
    active?: boolean;
    disabled?: boolean;
    onClick?: Function;
}

export const UIButton = (props: UIButtonProps) => {
    const Tag: any = props.tag;

    return <Tag
        className={classNames({
            'btn': true,
            [`btn-${props.style}`]: !!props.style,
            [`btn-${props.size}`]: !!props.size,
            'active': !!props.active,
            'disabled': !!props.disabled,
            [`ui-button_{props.mod}`]: !!props.mod
        })}
        type={props.type}
        onClick={props.onClick}
    >
        {props.children}
    </Tag>;
}

(UIButton as any).defaultProps = {
    style: 'default',
    type: 'button',
    tag: 'button',
    active: false,
    disabled: false,
    onClick: noop
};
