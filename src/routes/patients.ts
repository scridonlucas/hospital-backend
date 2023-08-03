import { Router } from 'express';
import patientsService from '../services/patients';
import { toNewPatentEntry } from '../utils/utilis';
const patientRouter = Router();

patientRouter.get('/', (_req, res) => {
  res.send(patientsService.getNonSensitiveEntries());
});

patientRouter.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatentEntry(req.body);

    const addedEntry = patientsService.addPatient(newPatientEntry);
    res.json(addedEntry);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});
export default patientRouter;
