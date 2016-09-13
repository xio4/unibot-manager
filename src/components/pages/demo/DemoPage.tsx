import * as React from 'react';
import { UIGridRow } from '../../ui/grid/UIGridRow.tsx';
import { UIGridColumn, Column, Offset } from '../../ui/grid/UIGridColumn.tsx';
import Align from '../../../constants/align.ts';
import { UITable } from '../../ui/table/UITable.tsx';
import { UITableRow } from '../../ui/table/UITableRow.tsx';
import { UITableColumn } from '../../ui/table/UITableColumn.tsx';
import { UIButton } from '../../ui/button/UIButton.tsx';

import './demo.styl';

const { OFFSET_1 } = Offset;
const { COL_1 } = Column;
const { RIGHT } = Align;

export class DemoPage extends React.Component<any, void> {
    render() {
        return <div className='demo'>
            <div className='demo__title'>
                Grid
            </div>
            <div className='demo__content'>
                <UIGridRow>
                    <UIGridColumn size={COL_1} offset={OFFSET_1} align={RIGHT}>
                        First column
                    </UIGridColumn>
                     <UIGridColumn size={COL_1} offset={OFFSET_1}>
                        Second column
                    </UIGridColumn>
                </UIGridRow>
            </div>
            <div className='demo__title'>
                Table
            </div>
            <div className='demo__content'>
                <UITable>
                    <UITableRow>
                        <UITableColumn>
                            Column 1
                        </UITableColumn>
                        <UITableColumn>
                            Column 2
                        </UITableColumn> 
                        <UITableColumn>
                            Column 3
                        </UITableColumn>  
                    </UITableRow>
                    <UITableRow>
                        <UITableColumn>
                            Column 1
                        </UITableColumn>
                        <UITableColumn>
                            Column 2
                        </UITableColumn> 
                    </UITableRow> 
                    <UITableRow>
                        <UITableColumn>
                            Column 1
                        </UITableColumn>
                    </UITableRow> 
                </UITable>
            </div>
            <div className='demo__title'>
                Buttons
            </div>
            <div className='demo__content'> 
                {
                    ['default', 'primary', 'success',
                        'info', 'warning', 'danger', 'link'].map(name =>
                         <UIButton style={name}>
                             {name}
                        </UIButton>
                    )
                }
            </div>
        </div>;
    }
}
