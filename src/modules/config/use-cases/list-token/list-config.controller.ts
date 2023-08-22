import { Controller, Get, HttpStatus, Inject, Query, Response } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { ListConfigSymbol } from './list-config.provider'
import { ListConfigService } from './list-config.service'
import { successResponse } from '@helpers/response.helper'
import { ListConfigDto } from './list-config.dto'
import { ListConfigParams } from '@modules/config/domain/params/list-config.params'

@ApiTags('configs')
@Controller('configs')
export class ListConfigController {
    constructor(
        @Inject(ListConfigSymbol)
        private service: ListConfigService
    ) {}

    @ApiOperation({ summary: 'List config' })
    @ApiResponse({ status: HttpStatus.OK })
    @Get('/')
    public async listConfig(@Query() query: ListConfigDto, @Response() res) {
        const params = new ListConfigParams(query.search)

        const listToken = await this.service.execute(params)

        return successResponse('List config successful', listToken, res, HttpStatus.OK)
    }
}
