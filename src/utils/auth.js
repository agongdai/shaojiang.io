import { loadEnv } from 'Utils/config';
import {
  CognitoAccessToken,
  CognitoIdToken,
  CognitoRefreshToken,
  CognitoUser,
  CognitoUserPool,
  CognitoUserSession,
} from 'amazon-cognito-identity-js';
import Amplify, { Auth } from 'aws-amplify';
import { getAccessTokenUsername } from 'Utils/string';

const appConfig = loadEnv();

const envCognito = appConfig.cognito;

const userPool = new CognitoUserPool({
  UserPoolId: envCognito.userPoolId,
  ClientId: envCognito.clientId,
});

export const createUserSession = (idToken, accessToken, refreshToken = '') => {
  try {
    const session = new CognitoUserSession({
      IdToken: new CognitoIdToken({ IdToken: idToken }),
      AccessToken: new CognitoAccessToken({ AccessToken: accessToken }),
      RefreshToken: new CognitoRefreshToken({ RefreshToken: refreshToken }),
    });

    const userData = {
      Username: getAccessTokenUsername(session.getAccessToken()
        .getJwtToken()),
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.signInUserSession = session;
    cognitoUser.cacheTokens();

    return cognitoUser;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const configAmplify = () => {
  Amplify.configure({
    Auth: appConfig.amplifyAuthConfig,
  });
};

export const isAuthenticated = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    return !!user;
  } catch (e) {
    return false;
  }
};

export const getCurrentUser = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    return user;
  } catch (e) {
    return null;
  }
};

/**
 * Get the avatar url of a logined user. Working for Google/Facebook logins.
 * @param user
 * @returns {*}
 */
export const getUserPicture = (user) => {
  const picture = _.get(user, 'attributes.picture', '');
  if (picture) {
    try {
      const data = JSON.parse(picture);
      return _.get(data, 'data.url', '');
    } catch (e) {
      return picture;
    }
  }
  return picture;
};

/**
 * Find the identity pool from the user attribute.
 * @returns {Promise<*>}
 */
export const getIdentityProvider = async () => {
  const user = await getCurrentUser();
  if (user) {
    const picture = getUserPicture(user);
    if (picture.indexOf('googleusercontent.com') >= 0) {
      return 'Google';
    } else if (picture.indexOf('fbsbx.com') >= 0) {
      return 'Facebook';
    }
    return 'Cognito';
  } else {
    return false;
  }
};

export const signOutCognito = async () => {
  try {
    await Auth.signOut();
    return true;
  } catch (e) {
    return false;
  }
};
