import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ReactGA from 'react-ga';
import Helmet from 'react-helmet-async';
import history from 'Utils/history';
import getMeta from 'Constants/pages-meta';
import { loadEnv } from 'Utils/config';

import 'react-toastify/dist/ReactToastify.css';

const env = loadEnv();

class SiteConfig extends React.Component {

  removeListener;

  state = {
    path: location.pathname,
  };

  getPageTitle = (metas = {}) => {
    const regex = /PhantomJS/i;
    let title = metas.title;
    if (regex.test(window.navigator.userAgent) && !_.isUndefined(metas.seoTitle)) {
      title = metas.seoTitle;
    }
    return title || '';
  };

  getPageDescription = (metas = {}) => {
    return metas.description;
  };

  getMeta = (key = null, value = '', type = 'link') => {
    const ui = (key && value) ? ({
      'title': <title>{value} - shaojiang.io</title>,
      'link': <link rel="icon" type="image/png" sizes={key} href={value} />,
    })[type] : null;
    return ui;
  };

  componentDidMount() {

    this.removeListener = history.listen(location => {
      this.setState({
        path: location.pathname,
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
    });

  }

  componentWillUnmount() {
    this.removeListener && this.removeListener();
  }

  render() {
    const { coinMeta, coinId } = this.props;
    const { path } = this.state;
    const routes = _.filter(path.split('/'));
    const page = `/` + routes.join('/');

    const pageMeta = getMeta(coinMeta)[page] || {};
    const siteMeta = getMeta(coinMeta)['site'] || {};
    const metas = {
      ...siteMeta,
      ...pageMeta,
    };

    const pageMetaTitle = this.getPageTitle(metas);
    const pageMetaDescription = this.getPageDescription(metas);
    const logo = _.get(coinMeta, 'logos.logo', '');
    const image = logo ? `${env.siteUrl}/images/coins/${coinId}-${logo}.png` : metas.image;
    const favicon16 = logo ? `${env.siteUrl}/images/coins/16x16/${coinId}-${logo}.png` : metas['16x16'];

    return (
      <Helmet>

        {this.getMeta('title', pageMetaTitle, 'title')}

        <link rel="canonical" href={location.href} />

        <meta name="robots" content={metas.robots} />
        <meta name="description" content={pageMetaDescription} />
        <meta name="image" content={image} />

        <meta itemProp="name" content={pageMetaTitle} />
        <meta itemProp="description" content={pageMetaDescription} />
        <meta itemProp="image" content={image} />

        <meta name="twitter:title" content={pageMetaTitle} />
        <meta name="twitter:description" content={pageMetaDescription} />
        <meta name="twitter:image" content={image} />

        <meta property="og:title" content={pageMetaTitle} />
        <meta property="og:description" content={pageMetaDescription} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={location.href} />

        {this.getMeta('32x32', image)}
        {this.getMeta('96x96', image)}
        {this.getMeta('192x192', image)}
        {this.getMeta('16x16', favicon16)}

      </Helmet>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SiteConfig);
