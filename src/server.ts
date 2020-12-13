import { PORT } from 'src/common/config';
import express, { Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(bodyParser.text());

app.use('/api', routes(Router()));

app.listen(PORT, () => {
  process.stdout.write(`Listening on port ${PORT}\n`);
});
