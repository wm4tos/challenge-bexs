import { compose } from 'src/common/helpers/operators';
import Graph from '../graph/model';
import { divideKeys, divideLines, getPathFromKeys } from './helpers';
import { getRoutes } from './repository';

export const getRoute = (from: string, to: string): string => {
  const formatPath = compose<string, unknown>(getPathFromKeys, divideKeys, divideLines);

  const graph = new Graph(formatPath(getRoutes()));

  return graph.go(from, to);
};
