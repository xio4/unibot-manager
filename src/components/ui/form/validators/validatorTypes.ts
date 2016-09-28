export type ValidatorRuleType = 
    RegExp
    | 'string'
    | Function;

export type ValidatorTextType =
    'string'
    | Function;

export interface IValidator {
    rule: ValidatorRuleType;
    text: ValidatorTextType;
}
 
