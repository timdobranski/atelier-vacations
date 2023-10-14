import Image from 'next/image';
import styles from './page.module.css';
import palms from '../public/palms.png';

export default function Home() {
  return (
    <main className={styles.main}>
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
