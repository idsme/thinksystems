
/**
 * This object rapresent the calculation obtained from webservice
 */
export class Calculation {
    public calculation: string;
    public error: boolean;
    public message: string;

    constructor(calculation: string, error: boolean, message ?: string){
        this.calculation = calculation;
        this.error = error;
        this.message = message;
    }
}
