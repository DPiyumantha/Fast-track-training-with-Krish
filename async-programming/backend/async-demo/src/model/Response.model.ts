/* eslint-disable prettier/prettier */
export class ResponseObj {
    result: any;
    error: boolean;
    errorMessage: string;
    constructor(result: any, error: boolean, errorMessage: string) {
        this.result = result;
        this.error = error;
        this.errorMessage = errorMessage
    }
}
