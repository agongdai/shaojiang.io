import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { Router } from 'react-router';
import ReactGA from 'react-ga';
import { HelmetProvider } from 'react-helmet-async';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { library } from '@fortawesome/fontawesome-svg-core';
import history from 'Utils/history';
import { configAmplify } from 'Utils/auth';
import { loadEnv } from 'Utils/config';

import {
  faBasketballBall,
  faBook,
  faDownload,
  faEnvelope,
  faFilm,
  faGraduationCap,
  faUser,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

import {
  faBtc,
  faFacebook,
  faFacebookSquare,
  faGithub,
  faGoogle,
  faGooglePlusSquare,
  faInstagram,
  faLinkedin,
  faMedium,
  faPinterestSquare,
  faReddit,
  faSlack,
  faStackOverflow,
  faTelegram,
  faTwitterSquare,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';

import { faTimes } from '@fortawesome/pro-light-svg-icons';
import Routes from './Routes';

import 'I18n/i18n';
import './styles/app.less';

library.add(
  faBasketballBall,
  faUtensils,
  faFilm,
  faBook,
  faEnvelope,
  faDownload,
  faGraduationCap,
  faGoogle,
  faFacebook,
  faTimes,
  faBtc,
  faFacebookSquare,
  faGithub,
  faGooglePlusSquare,
  faInstagram,
  faLinkedin,
  faMedium,
  faPinterestSquare,
  faReddit,
  faSlack,
  faTelegram,
  faTwitterSquare,
  faYoutubeSquare,
  faStackOverflow,
  faUser,
);

configAmplify();

const env = loadEnv();
ReactGA.initialize([{
  trackingId: env.gaTrackingId,
  gaOptions: {
    anonymizeIp: true,
  },
}]);

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      // Name of the styleSheet
      root: {
        // Name of the rule
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px !important',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
        flexGrow: 1,
      },
    },
  },
});

const App = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <HelmetProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </HelmetProvider>
    </MuiThemeProvider>
  </Provider>
);

export default hot(App);
