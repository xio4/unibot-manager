import * as React from 'react';
import * as classNames from 'classnames';

import './ui-table.styl';

interface UITableProps {
    children?: any;
    mod?: string;
    header?: any;
    striped?: boolean;
    bordered?: boolean;
    hover?: boolean;
    condensed?: boolean;
}

export const UITable = (props: UITableProps) => {
    return <table
        className={classNames({
            'table': true,
            'table-striped': props.striped,
            'table-bordered': props.bordered,
            'table-hover': props.hover,
            'table-condensed': props.condensed,
            [`ui-table_${props.mod}`]: !!props.mod
        })}
    >
        <thead>
            {props.header}
        </thead>
        <tbody>
            {props.children}
        </tbody>
    </table>;
}
