import * as React from 'react';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = require('./interests.less');

const Interests = () => (
  <div>
    <Grid container>
      <Grid item xs={3} className={styles.column}>
        <FontAwesomeIcon icon="basketball-ball" size="4x" />
        <p className={styles.text}>Basketball</p>
      </Grid>
      <Grid item xs={3} className={styles.column}>
        <FontAwesomeIcon icon="utensils" size="4x" />
        <p className={styles.text}>Foods</p>
      </Grid>
      <Grid item xs={3} className={styles.column}>
        <FontAwesomeIcon icon="film" size="4x" />
        <p className={styles.text}>Movies</p>
      </Grid>
      <Grid item xs={3} className={styles.column}>
        <FontAwesomeIcon icon="book" size="4x" />
        <p className={styles.text}>Reading</p>
      </Grid>
    </Grid>
  </div>
);

export default Interests;
