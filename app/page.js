'use client';

import styles from './page.module.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imagePath = '/palms.jpg';
    const img = new Image();
    img.src = imagePath;

    img.onload = () => {
      setImageLoaded(true);
    };

    img.onerror = () => {
      console.error(`Image at path "${imagePath}" failed to load.`);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  if (!imageLoaded) {
    return (
      <main className={styles.main}>
        <h1 className={styles.loadingTitle}>LOADING...</h1>
      </main>
    )
  }


  return (
    <main className={styles.main}>
      <Header />
      <h1 id={styles.title}>PARKWAY ACADEMY</h1>
      <div className={`${styles.bottomDiv}`}>
        <div className={`${styles.shard} ${styles.shard1}`}><div className={styles.img}  alt='shard' priority='true'></div></div>
        <div className={`${styles.shard} ${styles.shard2}`}><div className={styles.img}  alt='shard' priority='true'></div></div>
        <div className={`${styles.shard} ${styles.shard3}`}><div className={styles.img}  alt='shard' priority='true'></div></div>
        <div className={`${styles.shard} ${styles.shard4}`}><div className={styles.img}  alt='shard' priority='true'></div></div>
        <div className={`${styles.shard} ${styles.shard5}`}><div className={styles.img}  alt='shard' priority='true'></div></div>
        <div className={`${styles.shard} ${styles.shard6}`}><div className={styles.img}  alt='shard' priority='true'></div></div>
        <div className={`${styles.shard} ${styles.shard7}`}><div className={styles.img}  alt='shard' priority='true'></div></div>
        <div className={`${styles.shard} ${styles.shard8}`}><div className={styles.img}  alt='shard' priority='true'></div></div>
      </div>
    </main>
  )
}
