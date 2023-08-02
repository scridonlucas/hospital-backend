import { Router } from 'express';

const patientRouter = Router();

patientRouter.get('/patients', (_req, res) => {
  res.send('works');
});
export default patientRouter;
