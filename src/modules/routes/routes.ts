import { Router } from 'express';
import { Route } from 'src/common/interfaces';
import { getRoutePath, newRouteToCsv } from './controller';

export default (router: Router): Route => {
  router.get('/get', getRoutePath);

  router.post('/add', newRouteToCsv);

  return { endpoint: '/route', router };
};
