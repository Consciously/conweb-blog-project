import styles from '@/styles/HeroSection.module.css';
import Image from 'next/image';

export default function HeroSection({ heroSection }) {
	const {
		frontmatter: { authorImg, title, subtitle }
	} = heroSection;

	return (
		<section className={styles.hero}>
			<div className={styles.hero__container}>
				<div className={styles.hero__profile_image}>
					{/* <Image src={authorImg} alt='logo Stefan' width={326} height={326} /> */}
					<img src={authorImg} alt='logo Stefan' width='326' height='326' />
				</div>
				<div className={styles.hero__profile_content}>
					<h1>{title}</h1>

					<p>{subtitle}</p>
				</div>
			</div>
		</section>
	);
}
