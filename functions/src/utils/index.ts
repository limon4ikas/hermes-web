import express = require('express');
import cors = require('cors');

export const bootstrapExpress = () => {
  const app = express();
  app.use(cors({ origin: true }));
  app.use(express.json());

  return app;
};
