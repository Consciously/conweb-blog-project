import { Fragment } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// import { API_URL } from '@/config/index.js';
import HeroSection from '../components/HomePage/HeroSection';
import FeaturedSection from '../components/HomePage/FeaturedSection';
import LatestProjectSection from '../components/HomePage/LatestProjectSection';

export default function HomePage({ blogPosts, projects, staticContent }) {
	return (
		<Fragment>
			<HeroSection heroSection={staticContent[0]} />
			<FeaturedSection posts={blogPosts} />
			<LatestProjectSection projects={projects} />
		</Fragment>
	);
}

export async function getStaticProps() {
	const postFiles = fs.readdirSync(path.join('content', 'posts'));
	const projectFiles = fs.readdirSync(path.join('content', 'projects'));
	const staticContentFiles = fs.readdirSync(
		path.join('content', 'staticContent')
	);
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

	const projects = projectFiles.map(filename => {
		const slug = filename.replace('.md', '');

		const markdownWithMeta = fs.readFileSync(
			path.join('content', 'projects', filename),
			'utf-8'
		);

		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter
		};
	});

	const staticContent = staticContentFiles.map(filename => {
		const slug = filename.replace('.md', '');

		const markdownWithMeta = fs.readFileSync(
			path.join('content', 'staticContent', filename),
			'utf-8'
		);

		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter
		};
	});

	const getLimitedRandomContent = (blogPosts, projects) => {
		const lmtRndPosts = blogPosts
			.map((_, idx, arr) => arr[Math.floor(Math.random() * arr.length)])
			.slice(0, 3);

		const lmtRndProjects = projects
			.map((_, idx, arr) => arr[Math.floor(Math.random() * arr.length)])
			.slice(0, 3);

		return [lmtRndPosts, lmtRndProjects];
	};

	return {
		props: {
			blogPosts: getLimitedRandomContent(blogPosts, projects)[0],
			projects: getLimitedRandomContent(blogPosts, projects)[1],
			staticContent
		},
		revalidate: 10
	};
}

// export async function getStaticProps() {
// 	const resBlog = await fetch(
// 		`${API_URL}/posts?isFeatured_eq=true&_sort=created_at:ASC`
// 	);
// 	const blogPosts = await resBlog.json();

// 	const resProjects = await fetch(
// 		`${API_URL}/projects?_sort=created_at:ASC&_limit=3`
// 	);
// 	const projects = await resProjects.json();

// 	const resHero = await fetch(`${API_URL}/hero`);
// 	const hero = await resHero.json();

// 	return {
// 		props: {
// 			blogPosts,
// 			projects,
// 			hero
// 		},
// 		revalidate: 10
// 	};
// }
