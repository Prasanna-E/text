import { IA, NewA } from './a.model';

export const sampleWithRequiredData: IA = {
  id: 11940,
};

export const sampleWithPartialData: IA = {
  id: 601,
};

export const sampleWithFullData: IA = {
  id: 15745,
};

export const sampleWithNewData: NewA = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
