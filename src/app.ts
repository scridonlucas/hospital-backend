import express from 'express';
import cors from 'cors';
import patientRouter from './routes/patients';
import diagnosisRouter from './routes/diagnosis';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/diagnosis', diagnosisRouter);
app.use('/api/patients', patientRouter);

export default app;
