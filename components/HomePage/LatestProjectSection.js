import Link from 'next/link';
import ProjectItem from '../Projects/ProjectItem';
import styles from '@/styles/LatestProjectSection.module.css';
import cn from 'classnames';

export default function LatestProjectSection({ projects }) {
	return (
		<section className={styles.latestProjects}>
			<h2>Latest Projects</h2>
			<div className={styles.latestProjects__container}>
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
			<Link href='/projects'>
				<a
					className={cn(
						styles.latestProjects__button,
						styles.latestProjects__button_secondary
					)}
				>
					All Projects
				</a>
			</Link>
		</section>
	);
}
