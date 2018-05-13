import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import {CalculatorPage, operations} from '../pages/calculator/calculator.page';
import {async} from "q";

describe('work with calculator', () => {
    beforeAll(async () => {
        await browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
    });

    const calc = new CalculatorPage();
    const testData = [
        {value1: 5, operation: operations.Add, value2: 6, result: 11},
        {value1: 27, operation: operations.Add, value2: 56, result: 83},
        {value1: -5, operation: operations.Add, value2: 6, result: 1},
        {value1: 'aa', operation: operations.Add, value2: 6, result: 'NaN'},
        {value1: 10, operation: operations.Divide, value2: 2, result: 5},
        {value1: 5, operation: operations.Divide, value2: -10, result: -0.5},
        {value1: 5, operation: operations.Divide, value2: 25, result: 0.2},
        {value1: 5, operation: operations.Divide, value2: 'ss', result: 'NaN'},
        {value1: 5, operation: operations.Divide, value2: 0, result: 'Infinity'},
        {value1: 5, operation: operations.Module, value2: 2, result: 1},
        {value1: 19, operation: operations.Module, value2: 5, result: 4},
    ];
        testData.forEach(function (tc) {
        it(`${tc.value1} ${tc.operation} ${tc.value2} should give ${tc.result} as result`, async () => {
            await calc.calculator(tc.value1, tc.operation, tc.value2);
            expect(await calc.getResultCalculator()).toBe(tc.result.toString());
        });
    });

    it('check all results',async () => {
        const expectedArray = testData.map((test)=>test.result.toString()).reverse();

        expect(await calc.getResultTable()).toEqual(expectedArray);
    })

});
