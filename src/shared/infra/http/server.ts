import 'reflect-metadata';
import { CelebrateError } from 'celebrate';
import express, { NextFunction, Request, Response } from 'express';

import { router } from './routes';

import '../../container';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(router);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof CelebrateError) {
    return res.status(400).json({ message: error });
  }

  res.status(500).json({
    status: 'Error',
    message: 'Internal Server Error'
  });
});
app.listen(port, () => {
  console.log(`🚀 API Game listening on port 👉 ${port} and process: ${process.pid}`);
});
