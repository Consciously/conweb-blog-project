import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import cn from 'classnames';
import styles from '@/styles/MainNavigation.module.css';
import Search from '../UI/Search';

export default function MainNavigation() {
	const router = useRouter();

	const [showMenu, setShowMenu] = useState(false);

	const toggleMenuHandler = () => {
		setShowMenu(prev => !prev);
	};

	return (
		<nav className={styles.nav}>
			<button className={styles.nav__toggle_menu} onClick={toggleMenuHandler}>
				{!showMenu ? (
					<FaBars className={styles.nav__menu_icon} />
				) : (
					<FaTimes className={styles.nav__menu_icon} />
				)}
			</button>
			<div className={styles.nav__logo}>
				<Link href='/'>
					<a>
						<Image src='/images/logo.svg' alt='Logo' width={220} height={80} />
						{/* conweb.tech */}
					</a>
				</Link>
			</div>
			<ul
				className={`${styles.nav__menu} ${
					showMenu && cn(styles.nav__menu, styles.hide)
				}`}
			>
				<li className={router.pathname === '/blog' ? `${styles.selected}` : ''}>
					<Link href='/blog'>
						<a>Blog</a>
					</Link>
				</li>
				<li
					className={
						router.pathname === '/projects' ? `${styles.selected}` : ''
					}
				>
					<Link href='/projects'>
						<a>Portfolio</a>
					</Link>
				</li>
				<li
					className={router.pathname === '/about' ? `${styles.selected}` : ''}
				>
					<Link href='/about'>
						<a>About Me</a>
					</Link>
				</li>
				<li
					className={router.pathname === '/contact' ? `${styles.selected}` : ''}
				>
					<Link href='/contact'>
						<a>Contact</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
