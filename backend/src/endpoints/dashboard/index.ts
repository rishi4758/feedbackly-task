import { Router } from 'express';

import {
  getEmoticonAverage,
  getNpsGroups,
  getNpsScore,
} from '../../service/dashboard';

const router = Router();

const delay = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

router.get('/emoticon-average', async (_, res) => {
  const data = await getEmoticonAverage();
  await delay();
  res.json(data);
});

router.get('/nps-groups', async (_, res) => {
  const data = await getNpsGroups();
  await delay();
  res.json(data);
});

router.get('/nps-score', async (_, res) => {
  const data = await getNpsScore();
  await delay();
  res.json(data);
});

export default router;
