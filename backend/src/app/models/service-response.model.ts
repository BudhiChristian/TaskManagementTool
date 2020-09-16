export class ServiceResponse {
    statusCode: number;
    responseBody: any;
    constructor(statusCode, responseBody) {
        this.statusCode = statusCode;
        this.responseBody = responseBody;
    }
}