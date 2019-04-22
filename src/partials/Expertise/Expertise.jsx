import React from 'react';
import { Grid } from '@material-ui/core';
import ProgressBar from 'Elements/ProgressBar';

const styles = require('./expertise.less');

const expertise = [
  {
    skill: 'JavaScript',
    profession: 90,
  },
  {
    skill: 'React',
    profession: 90,
  },
  {
    skill: 'React-redux',
    profession: 95,
  },
  {
    skill: 'Angular',
    profession: 80,
  },
];

const secondarySkills = [
  {
    skill: 'node.js',
    profession: 80,
  },
  {
    skill: 'HTML',
    profession: 95,
  },
  {
    skill: 'CSS',
    profession: 90,
  },
  {
    skill: 'jQuery',
    profession: 95,
  },
];

class Expertise extends React.Component {
  render() {
    return (
      <Grid container spacing={40} className={styles.expertise}>
        <Grid item xs={12} sm={6}>
          {expertise.map(e => (
            <ProgressBar
              className={styles.bar}
              key={e.skill}
              percentage={e.profession}
              label={e.skill}
            />
          ))}
        </Grid>
        <Grid item xs={12} sm={6}>
          {secondarySkills.map(e => (
            <ProgressBar
              className={styles.bar}
              key={e.skill}
              percentage={e.profession}
              label={e.skill}
            />
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default Expertise;
