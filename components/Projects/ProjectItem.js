import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import styles from '@/styles/ProjectsItem.module.css';
import cn from 'classnames';

export default function ProjectItem({
	image,
	projectTitle,
	githubUrl,
	liveUrl
}) {
	return (
		<>
			<div className={styles.project__card}>
				<div className={styles.project__header}>
					<div className={styles.project__image}>
						<Image
							src={image}
							alt={projectTitle}
							width={373}
							height={249}
							layout='responsive'
						/>
					</div>
				</div>
				<div className={styles.project__body}>
					<h3>{projectTitle}</h3>
					<a
						className={cn(
							styles.project__button,
							styles.project__button_primary
						)}
						href={liveUrl}
						target='_blank'
						rel='noopener noreferrer nofollow'
					>
						Live Demo <FaArrowRight />
					</a>
					<a
						className={cn(
							styles.project__button,
							styles.project__button_primary
						)}
						href={githubUrl}
						target='_blank'
						rel='noopener noreferrer nofollow'
					>
						Github Repository <FaArrowRight />
					</a>
				</div>
			</div>
		</>
	);
}
