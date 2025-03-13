import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';

export const createToken = (
  jwtPayload: {
    name: string;
    email: string;
  },
  secret: string,
  expiresIn: string | number,
) => {
  const options: SignOptions = {
    expiresIn: expiresIn as SignOptions['expiresIn'],
  };
  return jwt.sign(jwtPayload, secret, options);
};
export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret as string) as JwtPayload;
};
