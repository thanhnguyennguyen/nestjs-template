import { ConfigRepositoryImpl } from '@modules/config/config.repo'
import { Provider } from '@nestjs/common'
import { ListConfigService } from './list-config.service'

export const ListConfigSymbol = Symbol('ListConfigSymbol')

export const ListConfigProvider: Provider = {
    provide: ListConfigSymbol,
    useFactory: (repo: ConfigRepositoryImpl): ListConfigService => {
        return new ListConfigService(repo)
    },
    inject: [ConfigRepositoryImpl],
}
