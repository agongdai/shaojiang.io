import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import NotFound404 from 'Components/NotFound404';
import Layout from 'Components/Layout';
import Portfolio from 'Components/Portfolio';

const PageRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout Component={component} rest={props} />
    )}
  />
);

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default () => (
  <div className="full-height">
    <Switch>
      <PageRoute exact path="/" component={Portfolio} />

      <PageRoute path="/404" component={NotFound404} />
      <Redirect from="*" to="/404" />
    </Switch>
    <Route component={ScrollToTop} />
  </div>
);
