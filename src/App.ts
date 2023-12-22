import { createExpressServer } from 'routing-controllers';
import 'reflect-metadata';

const app = createExpressServer({
  cors: true,
  routePrefix: '/api',
  classTransformer: true,
  defaultErrorHandler: false,
  controllers: [__dirname + '/Interface/Controllers/*.ts'],
  middlewares: [__dirname + '/Middlewares/*.ts'],
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});