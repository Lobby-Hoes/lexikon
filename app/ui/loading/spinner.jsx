import styles from './spinner.module.css'

export default function LoadingSpinner() {
    return (
        <div className={styles.circle}><div></div><div></div><div></div><div></div></div>
    );
}