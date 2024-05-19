'use client'
import LoadingSpinner from '@/app/ui/loading/spinner';
import styles from './page.module.css'
import { useEffect, useState } from 'react';
import fetchData from './dataFetcher';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function WordPage({ params }) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        const nested = async () => {
            const data = await fetchData(params.word);
            if (data == null) {
                router.push('/wordNotFound');
                return;
            }
            setData(data);
            setLoading(false);
        }

        nested();
    }, []);

    return (
        <>
        {loading ? <div className='center v h'><LoadingSpinner/></div> : <div className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <div className={styles.wordInformation}>
                        <h1 className={styles.word}>{data.word}</h1>
                        <span className={styles.type}>{data.type}</span>
                    </div>
                    <div className={styles.detailedInformation}>
                        <p>
                            <strong>Erklärung</strong><br/>
                            <span className={styles.explanation}>{data.explanation}</span>
                        </p>
                        <p>
                            <strong>Beispiele</strong><br/>
                            {data.examples.map((example, i) => (
                                <span className={styles.example} key={i}>{example}<br/></span>
                            ))}
                        </p>
                        <p>
                            <strong>Verwandte Wörter</strong><br/>
                            {data.closeWords.map((word, i) => (
                                <span className={styles.closeWord} key={i}><Link href={'/word/' + word}>
                                    {word}
                                </Link><br/></span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>}
        </>
    );
}