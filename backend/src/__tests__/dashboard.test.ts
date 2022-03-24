import mongoose from 'mongoose';
import supertest from 'supertest';
import app from '../index';

import Data from '../models/data';
import {
  mockData,
  emoticonAverage,
  npsGroups,
  npsScore,
} from '../utils/TestConstants';

const request = supertest(app);
const DB_URI = 'mongodb://localhost:27019/feedbackly_testing';

describe('Testing all the incoming request in dashboard', () => {
  beforeAll(async () => {
    try {
      await mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      const datas = await Data.countDocuments();
      await Data.insertMany(mockData);
      console.log(`setup done properly? ${datas === 5}`, datas);
    } catch (e) {
      console.error('Trouble connecting to Mongo. Is it running?');
      process.exit(1);
    }
  });

  afterAll(async () => {
    await Data.deleteMany();
    await mongoose.connection.close();
  });

  // eslint-disable-next-line jest/expect-expect
  it('Get the average value of emoticons using the Mongo aggregation pipeline', async () => {
    await request
      .get('/emoticon-average')
      .expect(200)
      .then((response) => {
        expect(response.body.average).toBe(emoticonAverage.average);
        expect(response.body.total).toBe(emoticonAverage.total);
      });
  });

  it('Get the number of NPS responses per group using the Mongo aggregation pipeline', async () => {
    await supertest(app)
      .get('/nps-groups')
      .expect(200)
      .then((response) => {
        expect(response.body.promoters).toBe(npsGroups.promoters);
        expect(response.body.detractors).toBe(npsGroups.detractors);
        expect(response.body.passives).toBe(npsGroups.passives);
      });
  });

  it('Calculate NPS score from nps groups', async () => {
    await supertest(app)
      .get('/nps-score')
      .expect(200)
      .then((response) => {
        expect(response.body.score).toBe(npsScore.score);
      });
  });
});
