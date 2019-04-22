import { Base64 } from 'js-base64';

export const getAccessTokenUsername = (token = '') => {
  const payload = token.split('.')[1];
  const usernameSource = JSON.parse(Base64.decode(payload));
  return usernameSource.username;
};
