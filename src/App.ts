import express from 'express';
import { PrismaClient } from '@prisma/client';
import { createExpressServer } from 'routing-controllers';

const prisma = new PrismaClient();

const app = createExpressServer({
  cors: true,
  routePrefix: '/api',
  classTransformer: true,
  defaultErrorHandler: false,
  controllers: [__dirname + '/Controllers/*.ts'],
  middlewares: [__dirname + '/Middlewares/*.ts'],
});

app.use(express.json());
app.listen(3000);