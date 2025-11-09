import React from 'react';
import * as styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  step: number;
  total: number;
}

export const ProgressBar = ({ step, total }: ProgressBarProps) => {
  const progressPercent = total > 0 ? Math.round((step / total) * 100) : 0;

  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div
          className={styles.progress}
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};
