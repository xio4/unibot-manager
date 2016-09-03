import * as React from 'react';

function check(val: number, str: string) {
    expect(val).toEqual(400);
    expect(str).toEqual('hello');
}

describe('test jest', () => {
    it('should be equals', () => {
        check(400, 'hello');
    });
});
