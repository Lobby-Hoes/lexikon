'use client'
import styles from './searchbar.module.css'
import Image from 'next/image';
import searchSVG from '@/public/svgs/search.svg'
import { useState } from 'react';

export default function SearchBar() {
    const [focus, setFocus] = useState(false);

    const focusStart = () => {
        setFocus(true);
    };

    const focusEnd = () => {
        setFocus(false);
    };

    return (
        <div className={styles.searchbarholder}>
            <input
                type='text'
                name='query'
                id='query'
                placeholder='Suche'
                className={styles.searchbar}
                onFocus={focusStart}
                onBlur={focusEnd}
            />
            <Image
                className={styles.searchicon + (focus ? '' : ' ' + styles.away)}
                src={searchSVG}
                width={30}
                height={30}
                alt='Search'
            />
        </div>
    );
}
