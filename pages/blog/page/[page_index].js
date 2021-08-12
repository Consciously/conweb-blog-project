import fs from 'fs';
import path from 'path';
import { POSTS_PER_PAGE } from '../../../config';
import matter from 'gray-matter';
import BlogList from '@/components/Blog/BlogList';
import Pagination from '@/components/UI/Pageination';
import CategoryList from '@/components/UI/CategoryList';
import SearchContainer from '@/components/UI/SearchContainer';
import styles from '@/styles/BlogList.module.css';

export default function AllBlogPostsPage({
	blogPosts,
	currentPage,
	numPages,
	categories
}) {
	return (
		<section className={styles.blog__section}>
			<div className={styles.blog__leftSide}>
				<h1>All Blog Posts</h1>
				<BlogList posts={blogPosts} />
				<Pagination currentPage={currentPage} numPages={numPages} />
			</div>
			<aside className={styles.blog__rightSide}>
				<SearchContainer />
				<CategoryList categories={categories} />
			</aside>
		</section>
	);
}

export async function getStaticPaths() {
	const postFiles = fs.readdirSync(path.join('content', 'posts'));

	const numPages = Math.ceil(postFiles.length / POSTS_PER_PAGE);

	let paths = [];

	for (let i = 1; i <= numPages; i += 1) {
		paths.push({
			params: {
				page_index: i.toString()
			}
		});
	}

	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const page = parseInt((params && params.page_index) || 1);
	const postFiles = fs.readdirSync(path.join('content', 'posts'));
	const posts = postFiles.map(filename => {
		const slug = filename.replace('.md', '');

		const markdownWithMeta = fs.readFileSync(
			path.join('content', 'posts', filename),
			'utf-8'
		);

		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter
		};
	});

	// Get categories for sidebar
	const categories = posts.map(post => post.frontmatter.category);

	const uniqueCategories = [...new Set(categories)];

	const numPages = Math.ceil(postFiles.length / POSTS_PER_PAGE);
	const pageIndex = page - 1;
	const blogPosts = posts.slice(
		pageIndex * POSTS_PER_PAGE,
		(pageIndex + 1) * POSTS_PER_PAGE
	);

	return {
		props: {
			blogPosts,
			numPages,
			currentPage: page,
			categories: uniqueCategories
		}
	};
}
