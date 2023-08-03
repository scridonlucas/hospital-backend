import { NewPatient } from '../types';

export const toNewPatentEntry = (object: unknown): NewPatient => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }
  if (
    'name' in object &&
    'dateOfBirth' in object &&
    'ssn' in object &&
    'gender' in object &&
    'occupation' in object
  ) {
    const newEntry: NewPatient = {
      name: parseValue(object.name),
      dateOfBirth: parseValue(object.dateOfBirth),
      ssn: parseValue(object.ssn),
      gender: parseValue(object.gender),
      occupation: parseValue(object.occupation),
    };
    return newEntry;
  }
  throw new Error('Incorrect data: some fields are missing');
};

const parseValue = (value: unknown): string => {
  if (!isString(value)) {
    throw new Error('Incorrect value');
  }
  return value;
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};
