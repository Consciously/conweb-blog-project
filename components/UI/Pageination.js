import Link from 'next/link';
import styles from '@/styles/Pagination.module.css';

export default function Pagination({ currentPage, numPages }) {
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage = `/blog/page/${currentPage - 1}`;
	const nextPage = `/blog/page/${currentPage + 1}`;

	if (numPages === 1) return <></>;

	return (
		<section className={styles.pagination}>
			<ul className={styles.pagination__container}>
				{!isFirst && (
					<li>
						<Link href={prevPage}>
							<a className='button primary'>Previous</a>
						</Link>
					</li>
				)}

				{Array.from({ length: numPages }, (_, i) => (
					<li key={i}>
						<Link href={`/blog/page/${i + 1}`}>
							<a className='button primary'>{i + 1}</a>
						</Link>
					</li>
				))}

				{!isLast && (
					<li>
						<Link href={nextPage}>
							<a className='button primary'>Next</a>
						</Link>
					</li>
				)}
			</ul>
		</section>
	);
}
