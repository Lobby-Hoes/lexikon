'use client'
import LoadingSpinner from '@/app/ui/loading/spinner';
import styles from './page.module.css'
import { useEffect, useState } from 'react';
import { getClosestWords, getWordInformation } from '@/app/logic/dataFetcher';
import Link from 'next/link';
import WordCard from './wordCard';

export default function WordPage({ params }) {
    const [loading, setLoading] = useState(true);
    const [failed, setFailed] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const nested = async () => {
            const data = await getClosestWords(params.word);
            if (data == null) {
                setFailed(true);
                return;
            }
            if (data[0].distance == 0) {
                setData(data[0].word);
                setLoading(false);
                return;
            }
            const first3 = [];
            for (let i = 0; i <= data.length-1; i++) {
                if (i >= 3) break;
                first3.push(data[i]);
            }
            setData(first3);
            setFailed(true);
        }
        nested();
    }, []);

    return (<>
        {loading ?
        <div className='center v h'>
            {failed ?
                <div className={styles.bestResults}>
                    <h2>Nichts Gefunden :/</h2>
                    <h4>Hier ein paar andere Wörter</h4>
                    <div className={styles.words}>
                        {data.map((entry, i) => {
                            return <WordCard key={i} word={entry.word.word} />
                        })}
                    </div>
                </div>
            :
                <LoadingSpinner/>
            }
        </div>
        :
        <div className={styles.container}>
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
    </>);
}