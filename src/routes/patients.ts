/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Router } from 'express';
import patientsService from '../services/patients';

const patientRouter = Router();

patientRouter.get('/', (_req, res) => {
  res.send(patientsService.getNonSensitiveEntries());
});

patientRouter.post('/', (req, res) => {
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;

  const addedPatient = patientsService.addPatient({
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation,
  });
  res.send(addedPatient);
});
export default patientRouter;
