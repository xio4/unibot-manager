import * as React from 'react';
import * as classNames from 'classnames';
import * as Align from '../../../constants/align.ts';

import './ui-form.styl';

export type SchemaElementType =
    'button'
    | 'hidden'
    | 'text'
    | 'word'
    | 'number'
    | 'radio'
    | 'checkbox'
    | 'select'
    | 'file'
    | 'group';

export interface ISchemaElement {
    disabled?: boolean,
    etype: SchemaElementType,
    id: string,
    inactive?: boolean
}

export interface ISchema {
    elements: Array<ISchemaElement>
}

interface UIFormProps {
    children?: any;
    mod?: string;
    options?: any;
    schema: ISchema;
    sources?: any;
    tag?: string;
    validators?: any;
    values?: any;
}

export class UIForm extends React.Component<UIFormProps, any> {

    public static defaultProps = {
        tag: 'form'
    };

    public render() {
        const
            {
                tag, children, mod
            } = this.props,
            Tag: any = tag;

        return <Tag
            className={classNames({
                'ui-form': true,
                [`ui-form_${mod}`]: !!mod
            })}
        >
            {children}
        </Tag>;
    }
}
