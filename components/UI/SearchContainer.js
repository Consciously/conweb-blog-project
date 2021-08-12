import { useState, useEffect } from 'react';
import styles from '@/styles/SearchContainer.module.css';
import Search from './Search';
import SearchResults from './SearchResults';

export default function SearchContainer() {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		const getResults = async () => {
			if (searchTerm === '') {
				setSearchResults([]);
			} else {
				const res = await fetch(`/api/search?q=${searchTerm}`);
				const { results } = await res.json();
				setSearchResults(results);
			}
		};

		getResults();
	}, [searchTerm]);

	return (
		<div className={styles.search__container}>
			<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<SearchResults results={searchResults} />
		</div>
	);
}
