import styles from '@/styles/MainFooter.module.css';
import {
	FaGithubSquare,
	FaMedium,
	FaTwitterSquare,
	FaInstagramSquare,
	FaLinkedin
} from 'react-icons/fa';

export default function MainFooter() {
	return (
		<footer className={styles.footer}>
			<p>&copy; conweb.tech</p>
			<ul className={styles.footer__social}>
				<li>
					<a href='#'>
						<FaGithubSquare />
					</a>
				</li>
				<li>
					<a href='#'>
						<FaMedium />
					</a>
				</li>
				<li>
					<a href='#'>
						<FaTwitterSquare />
					</a>
				</li>
				<li>
					<a href='#'>
						<FaInstagramSquare />
					</a>
				</li>
				<li>
					<a href='#'>
						<FaLinkedin />
					</a>
				</li>
			</ul>
			<ul className={styles.footer__legals}>
				<li>
					<a href='#'>Disclaimers</a>
				</li>
				<li>
					<a href='#'>Privacy Policy</a>
				</li>
				<li>
					<a href='#'>Terms and Conditions</a>
				</li>
			</ul>
		</footer>
	);
}
