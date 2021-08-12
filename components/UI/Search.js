import { FaSearch } from 'react-icons/fa';
import styles from '@/styles/Search.module.css';

export default function Search({ searchTerm, setSearchTerm }) {
	return (
		<div className={styles.search}>
			<form className={styles.search__form}>
				<input
					className={styles.search__field}
					type='search'
					name='search'
					id='search'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
					placeholder='Search Posts...'
				/>
				<FaSearch className={styles.search__icon} />
			</form>
		</div>
	);
}
