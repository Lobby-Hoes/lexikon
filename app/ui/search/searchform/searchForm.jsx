'use client'
import { useEffect } from 'react';
import SearchBar from '../searchbar/searchBar';
import styles from './searchForm.module.css'
import { useRouter } from 'next/navigation';

export default function SearchForm() {
    const router = useRouter();

    useEffect(() => {
        addEventListener('keydown', (event) => {
            if (event.key != 'Enter') return;
            search();
        });
    }, []);

    const search = () => {
        const query = document.getElementById('query').value.trim();
        if (query == '') return;
        router.push('/word/' + query);
    };
    return (
        <div className={styles.searchbox}>
            <SearchBar />
            <input
                className={styles.searchbutton}
                type='button'
                value='Nachschlagen ➜'
                onClick={search}
            />
        </div>
    );
}
