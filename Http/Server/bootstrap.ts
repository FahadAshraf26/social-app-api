import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import requestIp from 'request-ip';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestIp.mw());
logger.token('ip', (req) => req.url);
app.use(
  logger(':method :url :status :response-time ms - :res[content-length] :ip'),
);

app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);
app.use(cors());

export { app };
