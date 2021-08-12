import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styles from '@/styles/BlogDetail.module.css';
import cn from 'classnames';

export default function BlogDetail({ post }) {
	const [frontmatter, content] = post;
	const {
		title,
		date,
		coverImage,
		author,
		coverImageCreditAuthor,
		coverImageCreditCompany
	} = frontmatter;

	const components = {
		code({ node, inline, className, children, ...props }) {
			const match = /language-(\w+)/.exec(className || '');
			return !inline && match ? (
				<SyntaxHighlighter
					style={atomDark}
					language={match[1]}
					PreTag='div'
					children={String(children).replace(/\n$/, '')}
					{...props}
				/>
			) : (
				<code className={className} {...props} />
			);
		}
	};

	return (
		<div className={styles.blogDetail__container}>
			<div className={styles.blogDetail}>
				<Link href='/blog'>
					<a
						className={cn(
							styles.blogDetail__button,
							styles.blogDetail__button_back
						)}
					>
						&lt; Go Back
					</a>
				</Link>
				<div className={styles.blogDetail__header}>
					<h1>{title}</h1>
					<small>
						<span>{author}</span>
						{' - '}
						<span>{moment(date).format('DD MMMM YYYY')}</span>
					</small>
					{/* credit: https://github.com/vercel/next.js/discussions/18739#discussioncomment-344932 */}
					<div className={styles.blogDetail__image_container}>
						<Image
							src={coverImage}
							alt={title}
							layout='fill'
							className={styles.blogDetail__image}
						/>
						<div className={styles.blogDetail__image_credit}>
							<p>
								Image from{' '}
								<a
									href='https://google.com'
									target='_blank'
									rel='noopener noreferrer nofollow'
								>
									{coverImageCreditAuthor}
								</a>{' '}
								on{' '}
								<a
									href='https://google.com'
									target='_blank'
									rel='noopener noreferrer nofollow'
								>
									{coverImageCreditCompany}
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className={styles.blogDetail__body}>
					<ReactMarkdown components={components} children={content} />
				</div>
			</div>
		</div>
	);
}
