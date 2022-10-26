import { Request } from 'express';

export default function getToken(request: Request): string | Error {
  try {
    return request.headers?.authorization.split(' ')[1];
  } catch (error) {
    throw Error('Incorrect authorization header');
  }
}
