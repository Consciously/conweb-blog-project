import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import CategoryLabel from '@/components/UI/CategoryLabel';
import styles from '@/styles/BlogItem.module.css';

export default function BlogItem({
	blogTitle,
	image,
	slug,
	author,
	date,
	excerpt,
	category
}) {
	return (
		<>
			<div className={styles.blogItem}>
				<div className={styles.blogItem__header}>
					<CategoryLabel>{category}</CategoryLabel>
					<div className={styles.blogItem__image}>
						<Image
							src={image}
							alt={blogTitle}
							width={373}
							height={249}
							layout='responsive'
						/>
					</div>
				</div>
				<div className={styles.blogItem__body}>
					<h3>
						<Link href={`/blog/${slug}`}>
							<a>{blogTitle}</a>
						</Link>
					</h3>
					<small>
						<span>{author}</span>
						{' - '}
						{/* <span>{moment(date, 'YYYYMMDD').fromNow()}</span> */}
						<span>{date}</span>
					</small>
					<p>{excerpt}</p>
				</div>
			</div>
		</>
	);
}
