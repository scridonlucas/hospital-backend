import express from 'express';
import cors from 'cors';
import patientRouter from './controllers/patients';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', patientRouter);

export default app;
