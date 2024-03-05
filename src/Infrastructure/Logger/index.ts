import { Signale } from 'signale';

const options = {
  disabled: false,
  interactive: false,
  logLevel: 'info',
  stream: process.stdout,
};

export const logger = new Signale(options);
