import React from 'react';
import { Grid } from '@material-ui/core';
import HireMe from 'Partials/HireMe';
import Expertise from 'Partials/Expertise';
import WorkExperiences from './WorkExperiences';
import Education from './Education';
import Interests from './Interests';

const styles = require('./portfolio.less');

const Portfolio = () => (
  <div>
    <section>
      <div className={styles.container}>
        <h1 className={styles.sectionTitle}>
          <i className={styles.circle} />Shaojiang Cai - Senior Front-end
          Developer
        </h1>
        <Grid container spacing={40}>
          <Grid item xs={12} sm={8}>
            <p>
              Hi, I am Shaojiang Cai, a senior Front-end Developer with 7
              years experiences. I am currently a full-time freelancer at{' '}
              <a
                href="https://www.toptal.com/resume/shaojiang-cai"
                target="_blank"
              >
                Toptal.com
              </a>.
            </p>
            <p>
              <a href="https://redux.js.org/" target="_blank">
                React-redux
              </a>{' '}
              and{' '}
              <a href="https://www.jetbrains.com/idea/">IntelliJ IDEA</a>{' '}
              are my best friends. I talk in JavaScript, code at{' '}
              <a href="https://github.com/agongdai" target="_blank">
                GitHub
              </a>{' '}
              and play at{' '}
              <a
                href="https://stackoverflow.com/users/978320/joy"
                target="_blank"
              >
                StackOverflow
              </a>.
            </p>
            <p>I insist of these principles:</p>
            <ol>
              <li> - Punctuality</li>
              <li> - Professional</li>
              <li> - Elegant code</li>
            </ol>
            <p>Here are a list of my other friends:</p>
            <div>
              <div className={styles.devIcons}>
                {['react', 'angular', 'js', 'node', 'html5', 'css3', 'webpack', 'ubuntu'].map(i => (
                  <img key={i} src={`/public/images/dev-icons/i-${i}.svg`}
                       className={styles.devIcon} />
                ))}
              </div>
              <div className={styles.devIcons}>
                {['python', 'chrome', 'd3', 'git', 'less', 'babel', 'mongodb', 'jquery'].map(i => (
                  <img key={i} src={`/public/images/dev-icons/i-${i}.svg`}
                       className={styles.devIcon} />
                ))}
              </div>
            </div>
            <HireMe />
          </Grid>
          <Grid item xs={12} sm={4}>
            <img src={`/public/images/logo.svg`} alt="photo" />
          </Grid>
        </Grid>
      </div>
    </section>
    <section className={styles.expertise}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <i className={styles.circle} />Expertise
        </h2>
        <Expertise />
      </div>
    </section>
    <section className={styles.experiences}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <i className={styles.circle} />Work Experiences
        </h2>
        <WorkExperiences />
      </div>
    </section>
    <section className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <i className={styles.circle} />Education
        </h2>
        <Education />
      </div>
    </section>
    <section className={styles.interests}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <i className={styles.circle} />My Interests
        </h2>
        <Interests />
      </div>
    </section>
  </div>
);

export default Portfolio;
