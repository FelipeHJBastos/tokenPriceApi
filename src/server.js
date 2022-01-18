import express from 'express';

import { priceRoutes } from './routes/priceRoutes';

const app = express();

app.use(express.json());

app.use('/price', priceRoutes)

app.listen(3000, () => { console.log("Server is running...") });