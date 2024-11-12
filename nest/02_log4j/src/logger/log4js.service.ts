import { Injectable, LoggerService } from '@nestjs/common';
import * as log4js from 'log4js';
import log4jsConfig from "./log4js.config"; 

@Injectable()
export class Log4jsServer implements LoggerService {

    private logger: log4js.Logger = null;

    constructor() {
        log4js.configure(log4jsConfig);
        this.logger = log4js.getLogger();
    }

    log(message: any, ...args: any[]): any {
        // this.logger = log4js.getLogger('info');
        this.logger.log(message, ...args);
    }

    debug(message: string, ...args: any[]): void {
        // this.logger = log4js.getLogger('debug');
        this.logger.debug(message, ...args);
    }

    info(message: string, ...args: any[]): void {
        // this.logger = log4js.getLogger('info');
        this.logger.info(message, ...args);
    }

    warn(message: string, ...args: any[]): void {
        // this.logger = log4js.getLogger('warn');
        this.logger.warn(message, ...args);
    }

    error(message: string, ...args: any[]): void {
        // this.logger = log4js.getLogger('error');
        this.logger.error(message, ...args);
    }
}