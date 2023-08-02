import { Router } from 'express';
import diagnosesService from '../services/diagnoses';

const diagnosisRouter = Router();

diagnosisRouter.get('/', (_req, res) => {
  res.send(diagnosesService.getEntries());
});

export default diagnosisRouter;
