import * as React from 'react';
import * as classNames from 'classnames';
import { prop, path, isNil } from 'ramda';
import { forEach, isUndefined } from 'lodash';
import * as Align from '../../../constants/align';
import { IOnChange } from './utils/events';
import { ISchema, ISchemaElement } from './schema/schemaTypes';
import { ElementType } from './elements/elementTypes';
import elements from './elements/elements';
import { IValidator } from './validators/validatorTypes';

import './ui-form.styl';

const targetValuePath = path(['target', 'value']);


// FIXME: Fake
const formValidators: any = {
    required: {
        text: 'Required field',
        rule: (values: any, value: any, options: any, sources: any) => !isNil(value)
    }
};

interface UIFormProps {
    children?: any;
    mod?: string;
    options?: any;
    schema: ISchema;
    sources?: any;
    tag?: string;
    validators?: any;
    values?: any;
    onChange?: IOnChange;
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

    onChange = (id: string) => (event: Event, value: any) => {
        const 
            newValue = isUndefined(value) ? targetValuePath(event) : value;

        this.values[id] = newValue;
        this.errors = this.getErrors();
        this.setState({
            errors: this.errors
        });

        this.props.onChange(this.values, this.errors, id);
    };

    renderElement = (schema: ISchemaElement, key: any) => {
        const 
            etype: number = schema.etype,
            Element: any = prop(etype.toString(), elements);

        if (!Element) {
            throw new Error(`Can't find ${ElementType[schema.etype]}`);
        }

        return <Element
            key={key}
            schema={schema}
        />;
    };

    render() {
        const
            { tag, children, mod, schema } = this.props,
            Tag: any = tag;

        return <Tag
            className={classNames({
                'ui-form': true,
                [`ui-form_${mod}`]: !!mod
            })}
        >
            {schema.elements.map(this.renderElement)}
            {children}
        </Tag>;
    }
}
