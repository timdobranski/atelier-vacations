import Image from 'next/image';
import styles from './page.module.css';
import palms from '../public/palms.png';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.bottomDiv}`}>
        <div className={`${styles.shard} ${styles.shard1}`}><Image className={styles.img} src={palms} alt='shard' priority='true'></Image></div>
        <div className={`${styles.shard} ${styles.shard2}`}><Image className={styles.img} src={palms} alt='shard' priority='true'></Image></div>
        <div className={`${styles.shard} ${styles.shard3}`}><Image className={styles.img} src={palms} alt='shard' priority='true'></Image></div>
        <div className={`${styles.shard} ${styles.shard4}`}><Image className={styles.img} src={palms} alt='shard' priority='true'></Image></div>
        <div className={`${styles.shard} ${styles.shard5}`}><Image className={styles.img} src={palms} alt='shard' priority='true'></Image></div>
        <div className={`${styles.shard} ${styles.shard6}`}><Image className={styles.img} src={palms} alt='shard' priority='true'></Image></div>
        <div className={`${styles.shard} ${styles.shard7}`}><Image className={styles.img} src={palms} alt='shard' priority='true'></Image></div>
        <div className={`${styles.shard} ${styles.shard8}`}><Image className={styles.img} src={palms} alt='shard' priority='true'></Image></div>
      </div>
    </main>
  )
}
