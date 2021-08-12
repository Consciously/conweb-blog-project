import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ProjectList from '@/components/Projects/ProjectList';
import styles from '@/styles/ProjectList.module.css';

export default function AllProjectsPage({ projects }) {
	return (
		<section className={styles.project__section}>
			<>
				<h1>All Projects</h1>
				<ProjectList projects={projects} />
			</>
		</section>
	);
}

export async function getStaticProps() {
	const projectFiles = fs.readdirSync(path.join('content', 'projects'));
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

	return {
		props: {
			projects
		},
		revalidate: 10
	};
}
