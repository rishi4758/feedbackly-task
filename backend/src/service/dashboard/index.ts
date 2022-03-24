import Data from '../../models/data';

import {
  fetchEmoticonAverage,
  fetchNpsGroups,
  fetchNpsScore,
} from './aggregation';

export const getEmoticonAverage = async () => {
  const data = await Data.aggregate(fetchEmoticonAverage);
  return { average: data[0].average, total: data[0].total };
};

export const getNpsGroups = async () => {
  const data = await Data.aggregate(fetchNpsGroups);
  return {
    promoters: data[0].promoters,
    detractors: data[0].detractors,
    passives: data[0].passives,
    total: data[0].total,
  };
};

export const getNpsScore = async () => {
  const data = await Data.aggregate(fetchNpsScore);
  return { score: data[0].nps };
};
