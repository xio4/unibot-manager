import * as React from 'react';
import * as classNames from 'classnames';
import * as Align from '../../../constants/align.ts';

import './ui-grid-column.styl';

export const Column = {
    COL_1: '1',
    COL_2: '2',
    COL_3: '3',
    COL_4: '4',
    COL_5: '5',
    COL_6: '6',
    COL_7: '7',
    COL_8: '8',
    COL_9: '9',
    COL_10: '10',
    COL_11: '11',
    COL_12: '12'
};

export const Offset = {
    OFFSET_1: '1',
    OFFSET_2: '2',
    OFFSET_3: '3',
    OFFSET_4: '4',
    OFFSET_5: '5',
    OFFSET_6: '6',
    OFFSET_7: '7',
    OFFSET_8: '8',
    OFFSET_9: '9',
    OFFSET_10: '10',
    OFFSET_11: '11',
    OFFSET_12: '12'
};

interface UIGridColumnProps {
    align?: string;
    children?: any;
    mod?: string;
    size?: string;
    offset?: string;
    largeSize?: string;
    largeOffset?: string;
    mobileSize?: string;
    mobileOffset?: string;
    phoneSize?: string;
    phoneOffset?: string;
}

export class UIGridColumn extends React.Component<UIGridColumnProps, any> {
    public static defaultProps = {
        size: Column.COL_1
    };
    
    public render() {
        const {
            align,
            children, mod,
            size, offset,
            largeSize, largeOffset,
            mobileSize, mobileOffset,
            phoneSize, phoneOffset
        } = this.props;

        return <div
            className={classNames({
                [`col-xs-${size}`]: !!phoneSize,
                [`col-xs-offset-${phoneOffset}`]: !!phoneOffset,
                [`col-sm-${mobileSize}`]: !!mobileSize,
                [`col-sm-offset-${mobileOffset}`]: !!mobileOffset,
                [`col-md-${size}`]: !!size,
                [`col-md-offset-${offset}`]: !!offset,
                [`col-lg-${largeSize}`]: !!largeSize,
                [`col-lg-offset-${largeOffset}`]: !!largeOffset,
                [`ui-grid-column_align-${align}`]: !!align,
                [`ui-grid-column_${mod}`]: !!mod
            })}
        >
            {children}
        </div>;
    }
}
