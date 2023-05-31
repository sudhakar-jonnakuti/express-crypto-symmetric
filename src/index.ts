import http from 'http';
import cors from "cors";
import express, { Application, Request, Response } from "express";

import decryptSymmetric from "./decrypt.symmetric";
import encryptSymmetric from './encrypt.symmetric';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req: Request, res: Response) => {
  return res.status(200).json({ 'status': 'heathy' })
})

app.post("/encrypt", async (req: Request, res: Response) => {
  const plainText = req.body.plainText;
  res.json(await encryptSymmetric(plainText));
});

app.post("/decrypt", async (req: Request, res: Response) => {
  const { initVector, encryptedData } = req.body;
  res.json(await decryptSymmetric({ initVector, encryptedData }));
});

app.use("*", (req: Request, res: Response) => {
  return res.status(200).json({
    'statusCode': 404,
    'statusName': 'NOT_FOUND',
    'statusMessage': 'The requested resource could not be found.'
  })
});

export const server = http.createServer(app);
server.listen(5001, () => { console.log(`App listening on port 5001`); });
