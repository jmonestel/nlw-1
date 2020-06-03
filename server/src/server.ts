import express from 'express'

const app = express();

app.get('/users', (req, res) => {

  console.log("teste")

  res.json([
    '.',
    '..',
    '...'
  ]);
});

app.post('/users', (req, res) => {
  const user = {
    name: 'Juan',
    email: 'juan@email.com'
  }

  return res.json(user);
});

app.listen(3333);