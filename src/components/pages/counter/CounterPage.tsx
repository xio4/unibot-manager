import * as React from 'react';
import { UIGridRow } from '../../ui/grid/UIGridRow.tsx';
import { UIGridColumn, Column, Offset } from '../../ui/grid/UIGridColumn.tsx';
import Align from '../../../constants/align.ts';

const { OFFSET_1 } = Offset;
const { COL_1 } = Column;
const { RIGHT } = Align;

export class CounterPage extends React.Component<any, void> {
    render() {
        return <UIGridRow>
            <UIGridColumn size={COL_1} offset={OFFSET_1} align={RIGHT}>
                First column
            </UIGridColumn>
             <UIGridColumn size={COL_1} offset={OFFSET_1}>
                Second column
            </UIGridColumn> 
        </UIGridRow>;
    }
}
