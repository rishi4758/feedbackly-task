interface mockDataI {
  _id: string;
  value: number;
  type: string;
  createdAt: string;
}

interface emoticonAverageI {
  average: number;
  total: number;
}

interface npsGroupsI {
  promoters: number;
  detractors: number;
  passives: number;
  total: number;
}

interface npsSocreI {
  score: number;
}

export const mockData: mockDataI[] = [
  {
    _id: 'e0961827-916f-4ce4-aa70-98d632ed207e',
    value: 7,
    type: 'Emoticon',
    createdAt: '2021-04-30T15:52:39.000Z',
  },

  {
    _id: 'c55c786e-9b89-4139-be2c-82b34b2550dd',
    value: 6,
    type: 'Emoticon',
    createdAt: '2021-03-10T12:25:10.000Z',
  },
  {
    _id: '123725fe-679e-477c-a30b-4369562c8556',
    value: 4,
    type: 'NPS',
    createdAt: '2021-04-30T15:52:39.000Z',
  },
  {
    _id: 'a9dd3936-544b-4f70-b470-f93becedb205',
    value: 9,
    type: 'NPS',
    createdAt: '2019-09-13T23:02:55.000Z',
  },
  {
    _id: '2c8e7a88-2372-41f5-9bc6-7cb8320c6145',
    value: 7,
    type: 'NPS',
    createdAt: '2019-09-13T23:02:55.000Z',
  },
  {
    _id: '2c8e7a88-2372-41f5-9bc6-7cb8320c6146',
    value: 3,
    type: 'NPS',
    createdAt: '2019-09-13T23:02:55.000Z',
  },
];

export const emoticonAverage: emoticonAverageI = {
  average: 6.5,
  total: 2,
};

export const npsGroups: npsGroupsI = {
  promoters: 1,
  detractors: 2,
  passives: 1,
  total: 4,
};

export const npsScore: npsSocreI = {
  score: -25,
};
