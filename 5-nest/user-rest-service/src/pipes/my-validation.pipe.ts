

import { PipeTransform, Injectable, ArgumentMetadata, ValidationPipe, BadRequestException } from '@nestjs/common';
import { ValidationException } from 'src/exceptions/validation.exception';

@Injectable()
export class MyValidationPipe extends ValidationPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        try {
            await super.transform(value, metadata)
        } catch (err) {
            if (err instanceof BadRequestException) {
                throw new ValidationException()
            }
            return err;
        }
        return value;
    }
}