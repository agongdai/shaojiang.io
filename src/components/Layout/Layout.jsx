import React from 'react';
import { connect } from 'react-redux';
import SiteConfig from 'Partials/SiteConfig';
import Footer from 'Partials/Footer';

const styles = require('./layout.less');

const Layout = ({ Component, isProtected, rest, theme }) => (
  <div className={`${styles.wrapper} theme-${theme}`}>
    <SiteConfig />
    <main className={styles.content}>
      <Component {...rest} />
    </main>
    <Footer />
  </div>
);

const mapStateToProps = (state) => ({
  theme: state.root.theme,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
