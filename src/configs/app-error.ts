import { HttpStatus } from '@nestjs/common'
import { ERROR_CODE, ErrorList, IErrorDetails } from './codes'

export class AppError extends Error {
    protected errorCode: ERROR_CODE
    protected messageError: string
    protected statusCode: HttpStatus
    errors?: IErrorDetails[]
    additionalData?: any

    constructor(errorCode: ERROR_CODE, messageError?: string, errors?: IErrorDetails[], additionalData?: any) {
        const error = ErrorList[errorCode] || ErrorList[ERROR_CODE.SERVER_ERROR]
        const message = messageError || error.error
        super(message)
        this.errorCode = errorCode
        this.statusCode = error.code
        this.name = AppError.name
        this.message = message
        this.errors = errors || []
        this.additionalData = additionalData
    }

    getErrors() {
        return {
            errors: this.errors,
            errorCode: this.errorCode,
            statusCode: this.statusCode,
            message: this.message,
            additionalData: this.additionalData,
        }
    }
}
