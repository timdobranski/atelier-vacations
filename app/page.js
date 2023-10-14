import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.bottomDiv}`}>
        <h1 id={styles.title}>PARKWAY ACADEMY</h1>
        <div className={`${styles.shard} ${styles.shard1}`}><div className={styles.img}></div></div>
        <div className={`${styles.shard} ${styles.shard2}`}><div className={styles.img}></div></div>
        <div className={`${styles.shard} ${styles.shard3}`}><div className={styles.img}></div></div>
        <div className={`${styles.shard} ${styles.shard4}`}><div className={styles.img}></div></div>
        <div className={`${styles.shard} ${styles.shard5}`}><div className={styles.img}></div></div>
        <div className={`${styles.shard} ${styles.shard6}`}><div className={styles.img}></div></div>
        <div className={`${styles.shard} ${styles.shard7}`}><div className={styles.img}></div></div>
        <div className={`${styles.shard} ${styles.shard8}`}><div className={styles.img}></div></div>
      </div>
    </main>
  )
}
