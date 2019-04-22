import ReactGA from 'react-ga';

export const loadEnv = () => {
  const env = process.env.NODE_ENV || 'local';
  const runningEnv = process.env.RUNNING_ENV || 'stage';

  return ({
    test: require('Configs/env.local.json'),
    local: require('Configs/env.local.json'),
    production: runningEnv === 'stage' ? require('Configs/env.stage.json') : require('Configs/env.prod.json'),
  })[env];
};

export const gaTrackEvent = (action, category, label = '', value = null) => () => {
  ReactGA.event({
    action,
    category,
    label,
  });
};