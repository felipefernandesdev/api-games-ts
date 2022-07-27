import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to API Game');
});

app.listen(port, () => {
  console.log(`🚀 API Game listening on port 👉 ${port} and process: ${process.pid}`);
});
