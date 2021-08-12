---
title: '10 secret tricks for a perfect website'
date: '2021-06-08'
excerpt: 'This neat tricks makes your web site outstanding'
coverImage: '/images/posts/ten-secret-tricks-creating-the-perfect-website.jpg'
coverImageCreditAuthor: 'Caroline Johnson'
coverImageCreditCompany: 'Unsplash'
category: 'CSS'
author: 'Stefan Ihle'
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie. Laoreet non curabitur gravida arcu ac. Viverra suspendisse potenti nullam ac. Auctor neque vitae tempus quam pellentesque nec nam. Malesuada nunc vel risus commodo viverra maecenas. Tortor consequat id porta nibh venenatis cras. Dignissim convallis aenean et tortor at. Curabitur vitae nunc sed velit dignissim sodales ut. Molestie nunc non blandit massa enim nec dui nunc mattis. Turpis in eu mi bibendum neque egestas congue quisque egestas. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Vel facilisis volutpat est velit egestas dui id. Nibh mauris cursus mattis molestie a iaculis at erat.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie. Laoreet non curabitur gravida arcu ac. Viverra suspendisse potenti nullam ac. Auctor neque vitae tempus quam pellentesque nec nam. Malesuada nunc vel risus commodo viverra maecenas.

## Headline 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie. Laoreet non curabitur gravida arcu ac. Viverra suspendisse potenti nullam ac. Auctor neque vitae tempus quam pellentesque nec nam. Malesuada nunc vel risus commodo viverra maecenas. Tortor consequat id porta nibh venenatis cras. Dignissim convallis aenean et tortor at. Curabitur vitae nunc sed velit dignissim sodales ut. Molestie nunc non blandit massa enim nec dui nunc mattis. Turpis in eu mi bibendum neque egestas congue quisque egestas. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Vel facilisis volutpat est velit egestas dui id. Nibh mauris cursus mattis molestie a iaculis at erat.

1. Item One
2. Item Two
3. Item Three
4. Item Four

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie. Laoreet non curabitur gravida arcu ac. Viverra suspendisse potenti nullam ac. Auctor neque vitae tempus quam pellentesque nec nam. Malesuada nunc vel risus commodo viverra maecenas. Tortor consequat id porta nibh venenatis cras. Dignissim convallis aenean et tortor at. Curabitur vitae nunc sed velit dignissim sodales ut. Molestie nunc non blandit massa enim nec dui nunc mattis. Turpis in eu mi bibendum neque egestas congue quisque egestas. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Vel facilisis volutpat est velit egestas dui id. Nibh mauris cursus mattis molestie a iaculis at erat

## Headline 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie. Laoreet non curabitur gravida arcu ac. Viverra suspendisse potenti nullam ac. Auctor neque vitae tempus quam pellentesque nec nam. Malesuada nunc vel risus commodo viverra maecenas.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie. Laoreet non curabitur gravida arcu ac. Viverra suspendisse potenti nullam ac. Auctor neque vitae tempus quam pellentesque nec nam. Malesuada nunc vel risus commodo viverra maecenas.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie. Laoreet non curabitur gravida arcu ac. Viverra suspendisse potenti nullam ac. Auctor neque vitae tempus quam pellentesque nec nam. Malesuada nunc vel risus commodo viverra maecenas.

```js
const greeting = name => {
	return `Hello ${name} how's going?`;
};

console.log(greeting('John Doe'));
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie. Laoreet non curabitur gravida arcu ac. Viverra suspendisse potenti nullam ac. Auctor neque vitae tempus quam pellentesque nec nam. Malesuada nunc vel risus commodo viverra maecenas.

```js
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

```

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie. Laoreet non curabitur gravida arcu ac. Viverra suspendisse potenti nullam ac. Auctor neque vitae tempus quam pellentesque nec nam. Malesuada nunc vel risus commodo viverra maecenas.

```jsx
import BlogItem from './BlogItem';
import CardContainer from '../UI/CardContainer';
import styles from '@/styles/BlogList.module.css';

export default function BlogList({ posts }) {
	return (
		<section className={styles.allBlogPosts}>
			<CardContainer>
				{posts.map(
					(
						{
							slug,
							frontmatter: {
								coverImage,
								title,
								excerpt,
								author,
								date,
								category
							}
						},
						idx
					) => (
						<BlogItem
							key={idx}
							image={coverImage}
							blogTitle={title}
							slug={slug}
							excerpt={excerpt}
							author={author}
							date={date}
							category={category}
						/>
					)
				)}
			</CardContainer>
		</section>
	);
}
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie. Laoreet non curabitur gravida arcu ac. Viverra suspendisse potenti nullam ac. Auctor neque vitae tempus quam pellentesque nec nam. Malesuada nunc vel risus commodo viverra maecenas.

```css
.card__body--detail p {
	line-height: var(--size2500);
	padding: var(--size500);
}

.card__body h3 a {
	font-size: clamp(var(--size700), 2.5vw, var(--size1200));
	color: var(--primaryColor1800);
	text-decoration: none;
	padding-top: var(--size500);
}

a.button {
	display: block;
	/* margin: var(--size500) auto 0; */
	padding: var(--size500) var(--size1100);
	/* width: 18rem; */
	text-align: center;
	border: 1px solid var(--primaryColor1800);
	border-radius: 0.25rem;
	color: var(--primaryColor1800);
	outline: none;
	background: transparent;
	font-family: Montserrat, sans-serif;
	font-weight: 400;
	font-size: clamp(var(--size200), 15vw, var(--size500));
	text-decoration: none;
}
```
