import pino from 'pino';

const levels = {
  http: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60,
};

const PINO_CONFIGS = {
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      levelFirst: true,
      translateTime: 'yyyy-dd-mm, h:MM:ss TT',
      ignore: 'pid,hostname',
      singleLine: true
    } as pino.PrettyOptions,
  },
  customLevels: levels,
  useOnlyCustomLevels: true,
  level: 'http',
};

export const Logger = pino(PINO_CONFIGS);
