import { HttpStatus } from '@nestjs/common'
import { ERROR_CODE, ErrorList } from 'configs/codes'
import { Response } from 'express'

export function successResponse(message: string, data: any, res: Response, status?: HttpStatus) {
    return res.status(status || HttpStatus.OK).json({
        data,
        message,
    })
}

export function failureResponse(message: string, res: Response, errorCode: ERROR_CODE = ERROR_CODE.BAD_REQUEST) {
    const { error, code } = ErrorList[errorCode]
    return res.status(code).json({
        error,
        message,
    })
}

export function insufficientParameters(res: Response) {
    const { error, code } = ErrorList[ERROR_CODE.UNPROCESSABLE_ENTITY]
    return res.status(code).json({
        error,
        message: 'Insufficient parameters',
    })
}
