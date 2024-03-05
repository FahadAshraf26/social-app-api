import dotenv from 'dotenv';
dotenv.config();
import { Command } from 'commander';
import { app } from '@http/Server';
import { logger } from '@infrastructure/Logger';

const program = new Command();
const server = {
  PORT: 8080,
  APP_NAME: 'Social App API',
};
program.command('start').action(() => {
  const httpServer = app.listen(server.PORT, '0.0.0.0', () => {
    logger.scope(server.APP_NAME).info(`Listening on port ${server.PORT}`);
  });
  httpServer.keepAliveTimeout = 61 * 1000;
  httpServer.headersTimeout = 65 * 1000;
});
program.parse(process.argv);
