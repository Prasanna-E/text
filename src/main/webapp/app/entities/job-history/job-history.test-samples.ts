import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 1679,
};

export const sampleWithPartialData: IJobHistory = {
  id: 22880,
  startDate: dayjs('2024-12-03T18:28'),
};

export const sampleWithFullData: IJobHistory = {
  id: 10151,
  startDate: dayjs('2024-12-04T01:52'),
  endDate: dayjs('2024-12-03T11:47'),
  language: 'ENGLISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
