export type ValidatorRuleType = 
    RegExp
    | Function;

export type ValidatorTextType =
    'string'
    | Function;

export interface IValidator {
    name: string;
    rule: ValidatorRuleType;
    text: ValidatorTextType;
}
 
