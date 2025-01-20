import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.use(express.json({ limig: "50mb" }))

app.use("/api/v1/dalle", dalleRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E" })
})

app.listen(port, () => console.log('Server has started on port 8080'))