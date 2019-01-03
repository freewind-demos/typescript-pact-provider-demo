import * as express from 'express';

const app = express();

app.get('/hello', (req, res) => {
  const name = req.query.name;
  res.json({
    from: 'typescript-pact-provider-demo',
    hello: name,
    timestamp: Date.now()
  });
});

app.listen(3000, () => {
  console.log('listen on http://localhost:3000')
});
