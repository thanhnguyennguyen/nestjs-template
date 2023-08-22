import { Logger, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppDataSource } from '@configs/data-source'
import { IncomingMessage } from 'http'
import { ConfigModule } from '@modules/config/config.module'
import EnvironmentVariables from '@configs/environmentVariables'

@Module({
    imports: [
        TypeOrmModule.forRoot(AppDataSource),
        ConfigModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
