import {browser, element, by, By, $, $$, ExpectedConditions, ElementFinder} from 'protractor';

export enum operations {Divide = 'division', Add = 'add', Module = 'modulo'}

export class CalculatorPage {
    private inputFirstNumber;
    private inputSecondNumber;
    public division;
    public add;
    public modulo;
    private buttonGo;
    private currentResult;
    public historyResultRows;

    constructor() {
        this.inputFirstNumber = element(by.model('first'));
        this.inputSecondNumber = element(by.model('second'));
        this.division = $('[value="DIVISION"]');
        this.add = $('[value="ADDITION"]');
        this.modulo = $('[value="MODULO"]');
        this.buttonGo = $('[ng-click="doAddition()"]');
        this.currentResult = $('h2.ng-binding');
        this.historyResultRows = element.all(by.repeater('result in memory'));
    }

    async calculator(a: number | string, operator: operations, b: number | string): Promise<void> {
        await this.inputFirstNumber.sendKeys(a);
        await this[operator].click();
        await this.inputSecondNumber.sendKeys(b);
        await this.buttonGo.click()
    }

    async getResultCalculator(): Promise<string> {
        return this.currentResult.getText();
    }

    async getResultTable() {
        return this.historyResultRows.map((elm) => elm.$$('td').last().getText());
    }

}



