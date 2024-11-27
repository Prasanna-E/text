import { IB, NewB } from './b.model';

export const sampleWithRequiredData: IB = {
  id: 22649,
};

export const sampleWithPartialData: IB = {
  id: 2508,
};

export const sampleWithFullData: IB = {
  id: 25975,
};

export const sampleWithNewData: NewB = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
