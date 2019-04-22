import axios from 'axios';
import * as _ from 'lodash';
import { loadEnv } from 'Utils/config';

const env = loadEnv();
const messages = require('Constants/messages.json');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const signOut = () => {
  console.log('sign out locally');
};

const onFulfilled = (response) => {
  if (status >= 300) {
    let error = _.get(response, 'message', messages.generalErrorMessage);
    return Promise.reject(error);
  }
  return _.get(response, 'data', {});
};

const onError = (err) => {
  console.error('Error', err);
  return Promise.reject(messages.generalErrorMessage);
};

// For APIs without authorization.
export const xapi = (() => {
  let apis = {};
  return (apiHost = env.apiHostCoinCheckup) => {
    if (!apis[apiHost]) {
      const api = axios.create({
        baseURL: apiHost,
        timeout: env.apiTimeout,
        headers: {
          // 'X-Requested-With': 'XMLHttpRequest',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      // Verify the response format
      api.interceptors.response.use(onFulfilled, onError);
      apis[apiHost] = api;
    }
    return apis[apiHost];
  };
})();

export const externalXapi = (baseURL) => {
  const api = axios.create({
    timeout: env.apiTimeout,
    baseURL,
    headers: {},
  });
  return api;
};
