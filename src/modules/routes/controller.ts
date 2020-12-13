import { Request, Response } from 'express';
import { addNewRoute, getRoute } from './service';

export const getRoutePath = (req: Request, res: Response): any => {
  const { query: { to, from } } = req;

  return res.send(getRoute(from as string, to as string));
};

export const newRouteToCsv = (req: Request, res: Response): any => {
  const { body } = req;

  return res.send(addNewRoute(body));
};
