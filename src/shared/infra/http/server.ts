import 'reflect-metadata';
import express from 'express';

import { router } from './routes';

import '../../container';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`🚀 API Game listening on port 👉 ${port} and process: ${process.pid}`);
});
