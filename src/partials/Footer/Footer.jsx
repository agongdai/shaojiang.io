import React from 'react';

const styles = require('./footer.less');

class Footer extends React.Component {
  render() {
    return (
      <section className={styles.wrapper}>
        by Shaojiang Cai. &nbsp;
        <span>
          GitHub project:&nbsp;
          <a target="_blank" href="https://github.com/agongdai/shaojiang.io">shaojiang.io</a>
        </span>
      </section>
    );
  }
}

export default Footer;
