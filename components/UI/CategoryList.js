import Link from 'next/link';
import styles from '@/styles/CategoryList.module.css';

export default function CategoryList({ categories }) {
	return (
		<div className={styles.categoryList__container}>
			<h3>Categories</h3>
			<ul>
				{categories.map((category, idx) => (
					<li key={idx}>
						<Link href={`/blog/category/${category.toLowerCase()}`}>
							<a className='button primary'>{category}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
