import { InjectConnection, InjectRepository } from '@nestjs/typeorm'
import { Connection, Like, Repository } from 'typeorm'
import { Config } from './domain/config.entity'
import { IConfigModel } from './domain/config.model'
import { ListConfigPayload } from './domain/payload/list-config.payload'

export interface IConfigRepository {
    listConfig(payload: ListConfigPayload): Promise<IConfigModel[]>
}

export class ConfigRepositoryImpl implements IConfigRepository {
    constructor(
        @InjectRepository(Config)
        private readonly config: Repository<Config>,
    ) {}

    public async listConfig(payload: ListConfigPayload): Promise<IConfigModel[]> {
        return this.config.find({})
    }
}
