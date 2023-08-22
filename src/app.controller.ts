import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
    @Get('ping')
    async ping() {
        return 'pong'
    }

    @Get('current-time')
    async currentTime() {
        return Date.now()
    }
}
