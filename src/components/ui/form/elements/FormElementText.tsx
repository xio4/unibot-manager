import * as React from 'react';
import * as classNames from 'classnames';
import { path, isNil } from 'ramda';
import { forEach, isUndefined } from 'lodash';
import { ISchema } from '../schema/schemaTypes';
import { IOnElementChange } from '../utils/events';

import { FormElementRow } from './FormElementRow';
import { UIInput } from '../../input/UIInput';

import '../ui-form.styl';

const targetValuePath = path(['target', 'value']);

interface FormElementTextProps {
    children?: any;
    mod?: string;
    options?: any;
    schema: ISchema;
    sources?: any;
    tag?: string;
    validators?: any;
    values?: any;
    onChange?: IOnElementChange;
}

export class FormElementText extends React.Component<FormElementTextProps, any> {

    static defaultProps = {
        tag: 'form'
    };

    state: any = {
        errors: {}
    };

    values: any = {};
    errors: any = {};

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps: FormElementTextProps) {
    }

    onChange = (event: Event) => {
    };

    render() {
        const
            {
                tag, children, mod
            } = this.props,
            Tag: any = tag;

        return <UIInput

        >
            {children}
        </UIInput>;
    }
}
