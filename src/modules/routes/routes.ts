import { Router } from 'express';
import { Route } from 'src/common/interfaces';
import { getRoutePath } from './controller';

export default (router: Router): Route => {
  router.get('/get', getRoutePath);

  return { endpoint: '/route', router };
};
