import * as React from 'react';
import * as classNames from 'classnames';

import './ui-table.styl';

interface UITableColumnProps {
    children?: any;
    mod?: string;
    active?: any;
    success?: boolean;
    warning?: boolean;
    danger?: boolean;
    info?: boolean;
}

export const UITableColumn = (props: UITableColumnProps) => {
    return <td
        className={classNames({
            'active': !!props.active,
            'success': !!props.success,
            'warning': !!props.warning,
            'danger': !!props.danger,
            'info': !!props.info,
            [`ui-table-row_${props.mod}`]: !!props.mod
        })}
    >
        {props.children}
    </td>;
}
