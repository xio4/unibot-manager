import * as React from 'react';
import { UIGridRow } from '../../ui/grid/UIGridRow.tsx';
import { UIGridColumn, Column, Offset } from '../../ui/grid/UIGridColumn.tsx';
import Align from '../../../constants/align.ts';
import { UITable } from '../../ui/table/UITable.tsx';
import { UITableRow } from '../../ui/table/UITableRow.tsx';
import { UITableColumn } from '../../ui/table/UITableColumn.tsx';
import { UIButton, ButtonStyle, ButtonSize } from '../../ui/button/UIButton.tsx';
import { UITitle, TitleSize } from '../../ui/title/UITitle.tsx';
import { UIForm } from '../../ui/form/UIForm.tsx';
import { ISchema } from '../../ui/form/schema/schemaTypes';
import { ElementType } from '../../ui/form/elements/elementTypes';

import './demo.styl';

const { OFFSET_1 } = Offset;
const { COL_1 } = Column;
const { RIGHT } = Align;
const formSchema: ISchema = {
    elements: [
        {
            etype: ElementType.TEXT,
            id: 'text'
        }
    ]
};

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
                    (['default', 'primary', 'success',
                        'info', 'warning', 'danger', 'link'] as Array<ButtonStyle>).map((name, key) =>
                         <UIButton style={name} key={key}>
                             style {name}
                        </UIButton>
                    )
                }
                {
                    (['lg', 'md', 'sm', 'xs'] as Array<ButtonSize>).map((size, key) =>
                         <UIButton size={size} key={key}>
                             size {size}
                        </UIButton>
                    )
                }
            </div>
            <div className='demo__title'>
                Title
            </div>
            <div className='demo__content'>
                {
                    (['lg', 'md', 'sm', 'xs'] as Array<TitleSize>).map((size, key) =>
                        <div key={key}>
                            <UITitle size={size}>
                                Title size {size}
                            </UITitle>
                            <UITitle size={size} subtitle>
                                Subtitle size {size}
                            </UITitle>
                        </div>)
                }
            </div>
            <div className='demo__title'>
                Simple form
            </div>
            <div className='demo__content'>
                <UIForm schema={formSchema}>
                    <button>Submit</button>
                </UIForm>
            </div> 
        </div>;
    }
}
