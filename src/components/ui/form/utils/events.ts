
export interface IOnChange {
    (values: any, errors: any, id: string): any;
}

export interface IOnSubmit {
    (values: any): any;
}

export interface IOnElementChange {
    (event: Event, value?: any): any;
}

