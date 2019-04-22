import React from 'react';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = require('./education.less');

const universities = [
  {
    name: 'National University of Singapore',
    url: 'https://nus.edu.sg',
    icon: 'http://nus.edu.sg/templates/t3_nus2015/images/assets/logos/logo.png',
    period: 'Aug 2008 - Jul 2011',
    degree: 'Master of Science by research, Information Systems',
  },
  {
    name: 'Renmin University of China',
    icon: 'http://a1.att.hudong.com/74/68/19300000957711132019688194527.jpg',
    url: 'http://www.ruc.edu.cn',
    period: 'Sep 2004 - Jul 2008',
    degree: 'Bachelor of Engineering, Information Systems',
  },
];

const Education = () => (
  <div>
    {universities.map(u => (
      <Grid key={u.name} container spacing={24} className={styles.school}>
        <Grid item xs={1}>
          <FontAwesomeIcon icon="graduation-cap" size="3x" />
        </Grid>
        <Grid item xs={4}>
          <h2>
            <a href={u.url} target="_blank">
              {u.name}
            </a>
          </h2>
          <div className={styles.sub}>{u.degree}</div>
          <div className={styles.sub}>{u.period}</div>
        </Grid>
        <Grid item xs={2}>
          <a href={u.url} target="_blank">
            <img src={u.icon} alt="" className={styles.uniIcon} />
          </a>
        </Grid>
      </Grid>
    ))}
  </div>
);

export default Education;
