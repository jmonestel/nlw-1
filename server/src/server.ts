import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json()); //para interpretar requisições json
app.use(routes);

app.listen(3333);