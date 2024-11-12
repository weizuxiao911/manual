import { Controller, Get, HttpException, Inject, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService
    ) { }

    @Get()
    getHello(): any {
        Logger.debug('DEBUG')
        Logger.log('LOG')
        Logger.error('ERROR')
        throw new Error('ddadada')
        return 1 / 0
    }
}
