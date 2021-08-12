import BlogItem from './BlogItem';
import styles from '@/styles/BlogList.module.css';

export default function BlogList({ posts }) {
	return (
		<div className={styles.blog__container}>
			{posts.map(
				(
					{
						slug,
						frontmatter: { coverImage, title, excerpt, author, date, category }
					},
					idx
				) => (
					<BlogItem
						key={idx}
						image={coverImage}
						blogTitle={title}
						slug={slug}
						excerpt={excerpt}
						author={author}
						date={date}
						category={category}
					/>
				)
			)}
		</div>
	);
}
