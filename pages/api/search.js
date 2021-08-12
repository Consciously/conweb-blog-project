import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default (req, res) => {
	let blogPosts;

	if (process.env.NODE_ENV === 'production') {
		// fetch from cache
		blogPosts = require('../../cache/data').blogPosts;
	} else {
		const postFiles = fs.readdirSync(path.join('content', 'posts'));

		blogPosts = postFiles.map(filename => {
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
	}

	const results = blogPosts.filter(
		({ slug, frontmatter: { title, excerpt, category } }) =>
			title.toLowerCase().indexOf(req.query.q) !== -1 ||
			excerpt.toLowerCase().indexOf(req.query.q) !== -1 ||
			category.toLowerCase().indexOf(req.query.q) !== -1 ||
			slug.toLowerCase().indexOf(req.query.q) !== -1
	);
	res.status(200).json(JSON.stringify({ results }));
};
