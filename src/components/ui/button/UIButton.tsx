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
    active?: boolean;
    children?: any;
    disabled?: boolean;
    mod?: string;
    size?: ButtonSize;
    style?: ButtonStyle;
    tag?: string;
    btype?: ButtonType;
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
        type={props.btype}
        onClick={props.onClick}
    >
        {props.children}
    </Tag>;
}

(UIButton as any).defaultProps = {
    style: 'default',
    btype: 'button',
    tag: 'button',
    active: false,
    disabled: false,
    onClick: noop
};
