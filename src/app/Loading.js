import React from 'react';
import { ClockLoader } from 'react-spinners';
import styles from './page.module.css'
export default function Loading() {
  return (
    <div className={styles.load}>
      <ClockLoader color="#36d7b7" />
    </div>
  );
}