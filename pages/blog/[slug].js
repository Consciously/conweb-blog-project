import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogDetail from '@/components/Blog/BlogDetail';

export default function SingleBlogPage({ frontmatter, content, slug }) {
	return <BlogDetail post={[frontmatter, content]} />;
}

export async function getStaticPaths() {
	const postFiles = fs.readdirSync(path.join('content', 'posts'));
	const paths = postFiles.map(filename => ({
		params: {
			slug: filename.replace('.md', '')
		}
	}));

	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(
		path.join('content', 'posts', slug + '.md'),
		'utf-8'
	);

	const { data: frontmatter, content } = matter(markdownWithMeta);

	return {
		props: {
			frontmatter,
			content,
			slug
		}
	};
}

// export async function getServerSideProps({ query: { slug } }) {
// 	const res = await fetch(`${API_URL}/posts?slug=${slug}`);
// 	const posts = await res.json();

// 	return {
// 		props: {
// 			post: posts[0]
// 		}
// 	};
// }
