import * as React from 'react';
import * as classNames from 'classnames';
import { prop, path, isNil } from 'ramda';
import { forEach, isUndefined, isFunction, noop } from 'lodash';
import * as Align from '../../../constants/align';
import { IOnChange, IOnSubmit } from './utils/events';
import { ISchema, ISchemaElement } from './schema/schemaTypes';
import { ElementType } from './elements/elementTypes';
import elements from './elements/elements';
import { IValidator } from './validators/validatorTypes';

import './ui-form.styl';

const 
    targetValuePath = path(['target', 'value']),
    rulePath = path(['rule']),
    textPath = path(['text']);

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
    onSubmit?: IOnSubmit;
}

export class UIForm extends React.Component<UIFormProps, any> {

    static defaultProps = {
        tag: 'form',
        onChange: noop,
        onSubmit: noop
    };

    state: any;
    values: any;
    errors: any;

    constructor() {
        super();

        this.state = {
            errors: {},
            dirty: {}
        };            

        this.values = {};
        this.errors = {};
    }

    componentWillMount() {
        this.update();
    }

    componentWillReceiveProps(nextProps: UIFormProps) {
        this.update(nextProps);
    }

    update(props: UIFormProps = this.props) {
        let state: any = {};

        if (props.values !== this.values && !isUndefined(props.values)) {
            state.values = props.values;
            this.values = props.values;
        }
        
        this.setState(state);
    }

    getErrors(id?: string) {
        const { validators, sources, options } = this.props;

        let newErrors: any = {};

        if (!id) {
            forEach(validators, (elementValidators: Array<IValidator>, id: string) => {
                forEach(elementValidators, (validator: IValidator) => {
                    const 
                        formValidator = formValidators[validator.name],
                        rule = validator.rule || rulePath(formValidator),
                        text = validator.text || textPath(formValidator),
                        invalid = rule instanceof RegExp ? (rule as RegExp).test(this.values[name]) : (rule as Function)(this.values, this.values[name], options, sources),
                        invalidText = isFunction(text) && invalid ? text(this.values, this.values[name], options, sources) : text;

                    newErrors[name] = invalid && invalidText;

                    return invalid;
                });
            });

            if (JSON.stringify(this.errors) === JSON.stringify(newErrors)) {
                return this.errors;
            }
        } else {
            Object.assign(newErrors, this.errors, { [id]: formValidators[id](this.values, this.values[id], options, sources) });
        }

        return newErrors;
    }

    validate(id: string) {
        this.errors = this.getErrors(id);

        this.setState({
            errors: this.errors
        });
    }

    handleElementChange = (id: string) => (event: Event, value: any) => {
        const 
            newValue = isUndefined(value) ? targetValuePath(event) : value;

        this.values[id] = newValue;
        this.state.dirty[id] && this.validate(id);

        this.props.onChange(this.values, this.errors, id);
    };

    handleElementBlur = (id: string) => (event: Event) => {
        const 
            elementDirty = this.state.dirty[id] || this.isDirty(id);

        elementDirty && this.validate(id);

        this.setState({
            dirty: Object.assign(
                {},
                this.state.dirty,
                { [id]: elementDirty }
            )
        });
    };

    handleElementFocus = (id: string) => (event: Event) => {

    };

    handleSubmit = (event: Event) => {
        this.props.onSubmit(this.values);
    };

    isDirty(id: string) {
        return this.values[id] !== this.props.values[id];
    }

    renderElement = (schema: ISchemaElement, key: any) => {
        const 
            elementError = this.errors[key],
            Element: any = prop(schema.etype.toString(), elements);

        if (!Element) {
            throw new Error(`Can't find ${ElementType[schema.etype]}`);
        }

        return <Element
            key={key}
            schema={schema}
            error={elementError}
            onFocus={this.handleElementFocus(schema.id)}
            onBlur={this.handleElementBlur(schema.id)}
            onChange={this.handleElementChange(schema.id)}
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
            onSubmit={this.handleSubmit}
        >
            {schema.elements.map(this.renderElement)}
            {children}
        </Tag>;
    }
}
