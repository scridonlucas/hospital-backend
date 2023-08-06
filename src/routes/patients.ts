import { Router } from 'express';
import patientsService from '../services/patients';
import { toNewPatentEntry } from '../utils/utilis';

const patientRouter = Router();

patientRouter.get('/', (_req, res) => {
  res.send(patientsService.getEntries());
});

patientRouter.get('/:id', (req, res) => {
  const id = req.params.id;

  const patient = patientsService.findById(id);

  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
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
