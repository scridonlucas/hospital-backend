import diagnosis from '../../data/diagnoses';
import { Diagnose } from '../types';

const getEntries = (): Diagnose[] => {
  return diagnosis;
};

export default {
  getEntries,
};
