import Link from 'next/link';
import styles from '@/styles/SearchResult.module.css';
import CategoryLabel from './CategoryLabel';

export default function SearchResults({ results }) {
	if (results.length === 0) return <></>;

	return (
		<div className={styles.searchResult__container}>
			<h3>{results.length} Results</h3>
			{results.map(
				({ slug, frontmatter: { title, excerpt, category } }, idx) => (
					<div key={idx} className={styles.searchResult}>
						<div className={styles.searchResult__header}>
							<CategoryLabel compact={true}>{category}</CategoryLabel>
						</div>
						<div className={styles.searchResult__body}>
							<h3>
								<Link href={`/blog/${slug}`}>
									<a>{title}</a>
								</Link>
							</h3>
							<p>{excerpt}</p>
						</div>
					</div>
				)
			)}
		</div>
	);
}
