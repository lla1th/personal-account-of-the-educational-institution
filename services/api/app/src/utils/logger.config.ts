import * as winston from 'winston';
import { ConsoleTransportInstance } from 'winston/lib/winston/transports';
import ExtendedWinstonLogFormat from './ExtendedWinstonLogFormat';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const WinstonGraylog2 = require('winston-graylog2');

const transports: ConsoleTransportInstance[] = [
  new winston.transports.Console(),
];

const graylogConfig = {
  name: 'Graylog',
  exceptionsLevel: 'info',
  silent: false,
  graylog: {
    servers: [
      {
        host: process.env.GRAY_LOG_HOST,
        port: +process.env.GRAY_LOG_PORT,
      },
    ],
  },
  staticMeta: { env: process.env.GRAY_LOG_ENV },
};

if (process.env.GRAY_LOG_HOST) {
  transports.push(new WinstonGraylog2(graylogConfig));
}

export default {
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize({
      level: true,
      message: true,
    }),
    winston.format.timestamp({ format: '- DD-MM-YYYY HH:mm:ss -' }),
    winston.format.printf(
      (info: ExtendedWinstonLogFormat) =>
        `${info.level}: [${info.context || info.stack}] ${[info.timestamp]} ${
          info.message
        }`,
    ),
  ),
  transports,
};
