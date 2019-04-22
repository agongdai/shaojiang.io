import React from 'react';

const styles = require('./progress-bar.less');

const ProgressBar = (props) => {
  const { percentage, label, className } = props;
  return (
    <div className={`${styles.root} ${className}`}>
      <label className={styles.label}>
        <div>{label}</div>
        <div
          className={styles.percentageText}
          style={{ left: `calc(${percentage}% - 1em)` }}
        >
          {percentage}%
        </div>
      </label>
      <div className={styles.partial} style={{ width: `${percentage}%` }} />
      <div
        className={styles.circle}
        style={{ left: `calc(${percentage}% - 12px)` }}
      />
      <div
        className={styles.inner}
        style={{ left: `calc(${percentage}% - 6px)` }}
      />
      <div className={styles.full} />
    </div>
  );
};

export default ProgressBar;
