import { ApiProperty } from '@nestjs/swagger'
import { IsOptional } from 'class-validator'

export class ListConfigDto {
    @ApiProperty({ required: false })
    @IsOptional()
    search: string
}
