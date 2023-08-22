import { Injectable } from '@nestjs/common'
import { ListConfigParams } from '@modules/config/domain/params/list-config.params'
import { ListConfigPayload } from '@modules/config/domain/payload/list-config.payload'
import { IConfigRepository } from '@modules/config/config.repo'
import { IConfigModel } from '@modules/config/domain/config.model'

@Injectable()
export class ListConfigService {
    constructor(private readonly repository: IConfigRepository) {}

    public async execute(params: ListConfigParams): Promise<IConfigModel[]> {
        const payload = new ListConfigPayload(params.search)
        return this.repository.listConfig(payload)
    }
}
