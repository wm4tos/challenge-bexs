/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-dynamic-require, global-require */
import { existsSync } from 'fs';
import { RouterModule } from '../interfaces';

export default (modules: string[], path: string): RouterModule[] => {
  const routes: RouterModule[] = [];

  routes.push(...(modules.map((m) => (existsSync(`${path}/${m}/routes`) && require(`${path}/${m}/routes`).default)).filter((x) => x)));

  return routes;
};
