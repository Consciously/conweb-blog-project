import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogList from '@/components/Blog/BlogList';
import Pagination from '@/components/UI/Pageination';
import CategoryList from '@/components/UI/CategoryList';

export default function CategoryBlogPage({
	blogPosts,
	categoryName,
	categories
}) {
	return (
		<div className='blog__container'>
			<div className='blog__container--inner'>
				<h1>Posts in {categoryName}</h1>
				<BlogList posts={blogPosts} />
				{/* <Pagination currentPage={currentPage} numPages={numPages} /> */}
			</div>
			<aside className='blogsidebar__container'>
				<CategoryList categories={categories} />
			</aside>
		</div>
	);
}

export async function getStaticPaths() {
	const postFiles = fs.readdirSync(path.join('content', 'posts'));

	const categories = postFiles.map(filename => {
		const markdownWithMeta = fs.readFileSync(
			path.join('content', 'posts', filename),
			'utf-8'
		);

		const { data: frontmatter } = matter(markdownWithMeta);

		return frontmatter.category.toLowerCase();
	});

	const paths = categories.map(category => ({
		params: { category_name: category }
	}));

	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params: { category_name } }) {
	const postFiles = fs.readdirSync(path.join('content', 'posts'));
	const blogPosts = postFiles.map(filename => {
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

	// filter posts by category
	const categoryBlogPosts = blogPosts.filter(
		blogPost => blogPost.frontmatter.category.toLowerCase() === category_name
	);

	// Get categories for sidebar
	const categories = blogPosts.map(post => post.frontmatter.category);

	const uniqueCategories = [...new Set(categories)];

	return {
		props: {
			blogPosts: categoryBlogPosts,
			categoryName: category_name,
			categories: uniqueCategories
		}
	};
}
