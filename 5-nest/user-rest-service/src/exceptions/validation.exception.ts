import { HttpException, HttpStatus } from "@nestjs/common";


export class ValidationException extends HttpException {
    constructor() {
        super('Validation Failed', HttpStatus.BAD_REQUEST);
    }
}