import 'dotenv/config';
import express, { Request, Response } from "express";

import routes from './api';

const app = express();
const port = process.env.PORT || 3000;

app.use('/api', routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to farmers orders api!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
