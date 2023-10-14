import styles from './Header.module.css'

export default function Header() {
  return (
    <div id={styles.headerContainer}>
      <h2 className={styles.headerTitle}>ANNOUNCEMENTS</h2>
      <h2 className={styles.headerTitle}>EVENTS</h2>
      <h2 className={styles.headerTitle}>STAFF</h2>
      <h2 className={styles.headerTitle}>ABOUT US</h2>
    </div>
  )
}