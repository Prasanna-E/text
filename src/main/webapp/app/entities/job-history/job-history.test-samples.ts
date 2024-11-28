import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 1679,
};

export const sampleWithPartialData: IJobHistory = {
  id: 22880,
  startDate: dayjs('2024-11-28T03:26'),
};

export const sampleWithFullData: IJobHistory = {
  id: 10151,
  startDate: dayjs('2024-11-28T10:50'),
  endDate: dayjs('2024-11-27T20:46'),
  language: 'ENGLISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
