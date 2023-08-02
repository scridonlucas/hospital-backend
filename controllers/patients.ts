import { Router } from 'express';

const patientRouter = Router();

patientRouter.use('/patients', (_req, res) => {
  res.send('works');
});
export default patientRouter;
