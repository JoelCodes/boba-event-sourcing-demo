import express from 'express';
import { buildSchema } from 'graphql';
import { createHandler } from 'graphql-http/lib/use/express';
import {ruruHTML} from 'ruru/server';

const app = express();
const { PORT = 3000 } = process.env;

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = {
  hello: () => 'Hello, world!'
};

app.all('/graphql', createHandler({ schema, rootValue: root }));

app.get('/graphiql', (_, res) => {
  res.type('text/html');
  res.end(ruruHTML({endpoint: '/graphql'}))
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
