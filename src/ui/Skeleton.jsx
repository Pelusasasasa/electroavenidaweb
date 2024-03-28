// components/Skeleton.jsx
import React from 'react';
import styles from './Skeleton.module.css'; // Estilos CSS para el esqueleto

function Skeleton() {
  return (
    <div id={styles.skeleton} className='grid grid-cols-4 w-full gap-4'>
        <div className={styles.skeleton}>
            <div className={styles.avatar}></div>
            <div className={styles.text}></div>
            <div className={styles.text}></div>
            <div className={styles.text}></div>
        </div>
        <div className={styles.skeleton}>
            <div className={styles.avatar}></div>
            <div className={styles.text}></div>
            <div className={styles.text}></div>
            <div className={styles.text}></div>
        </div>
        <div className={styles.skeleton}>
            <div className={styles.avatar}></div>
            <div className={styles.text}></div>
            <div className={styles.text}></div>
            <div className={styles.text}></div>
        </div>
        <div className={styles.skeleton}>
            <div className={styles.avatar}></div>
            <div className={styles.text}></div>
            <div className={styles.text}></div>
            <div className={styles.text}></div>
        </div>
        <div className={styles.skeleton}>
            <div className={styles.avatar}></div>
            <div className={styles.text}></div>
            <div className={styles.text}></div>
            <div className={styles.text}></div>
        </div>
        <div className={styles.skeleton}>
            <div className={styles.avatar}></div>
            <div className={styles.text}></div>
            <div className={styles.text}></div>
            <div className={styles.text}></div>
        </div>
        <div className={styles.skeleton}>
            <div className={styles.avatar}></div>
            <div className={styles.text}></div>
            <div className={styles.text}></div>
            <div className={styles.text}></div>
        </div>
        <div className={styles.skeleton}>
            <div className={styles.avatar}></div>
            <div className={styles.text}></div>
            <div className={styles.text}></div>
            <div className={styles.text}></div>
        </div>
    </div>
  );
}

export default Skeleton;
