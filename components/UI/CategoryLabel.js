import Link from 'next/link';
import cn from 'classnames';
import stylesCategory from '@/styles/CategoryLabel.module.css';
import stylesCategorySearch from '@/styles/SearchResult.module.css';

export default function CategoryLabel({ children, compact }) {
	const childrenLow = children.toLowerCase();

	if (compact)
		return (
			<div className={stylesCategorySearch.searchResult__label}>
				<Link href={`/blog/category/${childrenLow}`}>
					<a
						className={cn(
							stylesCategorySearch.button,
							stylesCategorySearch[childrenLow]
						)}
					>
						{children}
					</a>
				</Link>
			</div>
		);

	return (
		<div className={stylesCategory.categoryLabel__container}>
			<Link href={`/blog/category/${childrenLow}`}>
				<a className={cn(stylesCategory.button, stylesCategory[childrenLow])}>
					{children}
				</a>
			</Link>
		</div>
	);
}
