import { readFileSync } from 'fs';
import { join } from 'path';
import { ROUTE_PATH } from 'src/common/config';

export const getRoutes = (): string => {
  const data = readFileSync(join(__dirname, '..', '..', '..', ROUTE_PATH), 'utf-8');

  return data;
};
