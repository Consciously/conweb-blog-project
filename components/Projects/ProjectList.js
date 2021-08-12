import ProjectItem from './ProjectItem';
import styles from '@/styles/ProjectList.module.css';

export default function ProjectList({ projects }) {
	return (
		<div className={styles.project__container}>
			{projects.map(
				({ frontmatter: { title, coverImage, liveUrl, githubUrl } }, idx) => (
					<ProjectItem
						key={idx}
						image={coverImage}
						projectTitle={title}
						githubUrl={githubUrl}
						liveUrl={liveUrl}
					/>
				)
			)}
		</div>
	);
}
