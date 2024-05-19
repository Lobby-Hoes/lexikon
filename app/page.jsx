import SearchForm from './ui/search/searchform/searchForm';
import styles from './page.module.css'

export default function Home() {
    return (
        <div className='center h'>
            <SearchForm/>
            <div className={styles.publicwords}>
                
            </div>
        </div>
    );
}
