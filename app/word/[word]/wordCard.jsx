import styles from './wordCard.module.css'
import Link from 'next/link';

export default function WordCard({ word }) {
    return (
        <div className={styles.card}>
            <Link href={'/word/' + word}>
                <h5>{word}</h5>
            </Link>
        </div>
    );
}