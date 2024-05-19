'use client'
import SearchBar from '../searchbar/searchBar';
import styles from './searchForm.module.css'

export default function SearchForm() {
    const search = () => {
        const query = document.getElementById('query').value;
        console.log(query);
    };
    return (
        <form className={styles.searchbox}>
            <SearchBar />
            <input
                className={styles.searchbutton}
                type='button'
                value='Nachschlagen ➜'
                onClick={search}
            />
        </form>
    );
}
