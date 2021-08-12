import Link from 'next/link';
import BlogItem from '../Blog/BlogItem';
import styles from '@/styles/FeaturedSection.module.css';
import cn from 'classnames';

export default function FeaturedSection({ posts }) {
	return (
		<section className={styles.featuredBlogs}>
			<h2>Featured Blog Posts</h2>
			<div className={styles.featuredBlogs__container}>
				{posts.map(
					(
						{
							slug,
							frontmatter: {
								coverImage,
								title,
								excerpt,
								author,
								date,
								category
							}
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
			<Link href='/blog'>
				<a
					className={cn(
						styles.featuredBlogs__button,
						styles.featuredBlogs__button_secondary
					)}
				>
					All Posts
				</a>
			</Link>
		</section>
	);
}
