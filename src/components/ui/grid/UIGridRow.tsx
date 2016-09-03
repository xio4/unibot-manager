import * as React from 'react';
import * as classNames from 'classnames';

import './ui-grid-row.styl';

interface UIGridRowProps { children?: any; mod?: string; }

export const UIGridRow = (props: UIGridRowProps) => {
    return <div 
        className={classNames({
            'row': true,
            [`ui-grid-row_${props.mod}`]: !!props.mod
        })}
    >
        {props.children}
    </div>;
};
