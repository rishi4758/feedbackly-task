export const fetchEmoticonAverage = [
  {
    $match: { type: 'Emoticon' },
  },

  {
    $group: {
      _id: 'Emoticon',
      average: { $avg: '$value' },
      total: { $sum: 1 },
    },
  },
  {
    $addFields: {
      average: { $trunc: ['$average', 2] },
    },
  },
];

export const fetchNpsGroups = [
  {
    $match: { type: 'NPS' },
  },
  {
    $group: {
      _id: 'NPS',
      detractors: { $sum: { $cond: [{ $lte: ['$value', 6] }, 1, 0] } },
      promoters: { $sum: { $cond: [{ $gte: ['$value', 9] }, 1, 0] } },
      total: { $sum: 1 },
    },
  },
  {
    $addFields: {
      passives: {
        $subtract: ['$total', { $sum: ['$detractors', '$promoters'] }],
      },
    },
  },
];

export const fetchNpsScore = [
  {
    $match: { type: 'NPS' },
  },
  {
    $group: {
      _id: 'NPS',
      detractors: { $sum: { $cond: [{ $lte: ['$value', 6] }, 1, 0] } },
      promoters: { $sum: { $cond: [{ $gte: ['$value', 9] }, 1, 0] } },
      total: { $sum: 1 },
    },
  },
  {
    $addFields: {
      nps: {
        $trunc: [
          {
            $multiply: [
              {
                $subtract: [
                  { $divide: ['$promoters', '$total'] },
                  { $divide: ['$detractors', '$total'] },
                ],
              },
              100,
            ],
          },
          2,
        ],
      },
    },
  },
];
