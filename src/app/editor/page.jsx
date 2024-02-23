import React from 'react'
import styles from './editor.module.css'
const editor = () => {
  return (
    <div className={styles.main}>
    <div className={styles.left}></div> <div className={styles.right}></div>
    </div>
  )
}

export default editor