import express, { RequestHandler } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import Data from './models/data';
import endpoints from './endpoints/dashboard';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(cors({ origin: true, credentials: true }));
app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.use(endpoints);

if(process.env.NODE_ENV !== 'test'){

app.listen(port, async () => {
  try {
    await mongoose.connect('mongodb://localhost:27019/feedbackly', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Example app listening at http://localhost:${port}`);
    const datas = await Data.countDocuments();
    console.log(`setup done properly? ${datas === 1000}`);
  } catch (e) {
    console.error('Trouble connecting to Mongo. Is it running?');
    process.exit(1);
  }
});
}

export default app
