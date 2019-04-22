import * as React from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = require('./hire-me.less');

class HireMe extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <a
          href="https://www.linkedin.com/in/shaojiangcai/"
          target="_blank"
          className={styles.icon}
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} color="#0077B5" size="2x" />
        </a>
        <a
          href="https://stackoverflow.com/users/978320/joy"
          target="_blank"
          className={styles.icon}
        >
          <FontAwesomeIcon icon={['fab', 'stack-overflow']} color="rgb(244, 128, 36)" size="2x" />
        </a>
        <a
          href="https://github.com/agongdai"
          target="_blank"
          className={styles.icon}
        >
          <FontAwesomeIcon icon={['fab', 'github']} color="#24292e" size="2x" />
        </a>
        <a href="mailto:caishaojiang@gmail.com">
          <Button>
            <FontAwesomeIcon icon="envelope" />&nbsp;&nbsp;&nbsp;Hire Me
          </Button>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="/public/files/CV_Shaojiang_Cai.pdf" target="_blank">
          <Button>
            <FontAwesomeIcon icon="download" />&nbsp;&nbsp;&nbsp;Download CV
          </Button>
        </a>
      </div>
    );
  }
}

export default HireMe;
