import { initTRPC } from '@trpc/server';
import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import z from 'zod';
import { Context } from 'boba-common';
import { createOrder, getMenu } from './data';

const app = express();
const { PORT = 3000 } = process.env;

const createContext = ({}:trpcExpress.CreateExpressContextOptions):Context => ({});
const t = initTRPC.context<Context>().create();

const appRouter = t.router({
  getMenu:t.procedure.query((opts) => {
    return getMenu();
  }),
  createOrder:t.procedure.mutation((opts) => {
    return createOrder();
  })
});

app.use('/trpc', trpcExpress.createExpressMiddleware({ 
  router: appRouter, 
  createContext 
}));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
