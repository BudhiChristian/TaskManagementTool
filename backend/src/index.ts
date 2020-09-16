import express from 'express';

import { connectDB } from './app/config/database';
import { environment } from './environment/environment';

const app = express();
const host = environment.runConfigurations.host;
const port = environment.runConfigurations.port;


connectDB();
app.use(express.json());

app.use('/tasks', require('./app/routes/task.route'));

app.listen(port, host, () => {
    console.log(`Project Running on Port ${port}`)
});