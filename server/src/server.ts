import express from 'express';
import cors from 'cors';
import routes from './routes';

import path from 'path';

const app = express();
app.use(cors()); //usado para definir dominios que vão acessar o server
app.use(express.json()); //para interpretar requisições json
app.use(routes);

/*
  express.static 
  Usado para rotas fixas, normalmente arquivos.
  Exemplo de uso em imagens e arquivos fixos no sistema
  http://localhost:3333/uploads/lampadas.svg
*/
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));


app.listen(3333);