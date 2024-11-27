import * as path from 'path';

const baseLogPath = path.resolve(__dirname, '../../logs');

const log4jsConfig = {
    appenders: {
        console: {
            type: 'stdout',
        },
        file: {
            type: 'dateFile',
            filename: `${baseLogPath}/app.log`,
            pattern: 'yyyy-MM-dd',
            alwaysIncludePattern: true,
            maxLogSize: 10485760,
            backups: 10,
            compress: true,
            keepFileExt: true,
        },
    },
    categories: {
        default: {
            appenders: ['console', 'file'],
            level: 'ALL',
        },
    },
    pm2: true,
    pm2InstanceVar: 'INSTANCE_ID',
};
export default log4jsConfig;