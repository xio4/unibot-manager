import * as React from 'react';
import * as classNames from 'classnames';
import { path, isNil } from 'ramda';
import { forEach } from 'lodash';
import * as Align from '../../../constants/align.ts';
import { OnChange } from './utils/events';
//import * as formValidators from './validators/index.ts';

import './ui-form.styl';

const targetValuePath = path(['target', 'value']);

export type ValidatorRuleType = 
    RegExp
    | 'string'
    | Function;

export type ValidatorTextType =
    'string'
    | Function;

interface IValidator {
    rule: ValidatorRuleType;
    text: ValidatorTextType;
}

// FIXME: Fake
const formValidators: any = {
    required: {
        text: 'Required field',
        rule: (values: any, value: any, options: any, sources: any) => !isNil(value)
    }
};

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
    onChange?: OnChange;
}

export class UIForm extends React.Component<UIFormProps, any> {

    static defaultProps = {
        tag: 'form'
    };

    state: any = {
        errors: {}
    };
    values: any = {};
    errors: any = {};

    componentWillMount() {
        this.update();
    }

    componentWillReceiveProps(nextProps: UIFormProps) {
        this.update(nextProps);
    }

    update(props: UIFormProps = this.props) {
        let state: any = {};

        if (props.values !== this.values) {
            state.values = props.values;
            this.values = props.values;
        }
        
        this.setState(state);
    }

    getErrors() {
        const { validators, sources, options } = this.props;

        let newErrors: any = {};

        forEach(validators, (validator: any, name: string) => {
            newErrors[name] = formValidators[name](this.values, this.values[name], options, sources);
        });

        if (JSON.stringify(this.errors) === JSON.stringify(newErrors)) {
            return this.errors;
        }

        return newErrors;
    }

    onChange = (id: string, event: Event, value: any) => {
        const newValue = targetValuePath(event) || value;

        this.values[id] = newValue;
        this.errors = this.getErrors();
        this.setState({
            errors: this.errors
        });

        this.props.onChange(this.values, this.errors, id);
    };

    render() {
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
