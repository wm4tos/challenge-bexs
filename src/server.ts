import { PORT } from 'src/common/config';
import express, { Router } from 'express';
import routes from './routes';

const app = express();

app.use('/api', routes(Router()));

app.listen(PORT, () => {
  process.stdout.write(`Listening on port ${PORT}\n`);
});
