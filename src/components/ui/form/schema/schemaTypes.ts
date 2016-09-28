import { ElementType } from '../elements/elementTypes';

export interface ISchemaElement {
    disabled?: boolean,
    etype: ElementType,
    id: string,
    inactive?: boolean
}

export interface ISchema {
    elements: Array<ISchemaElement>
}
 
