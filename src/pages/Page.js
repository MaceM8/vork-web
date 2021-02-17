import React from 'react';
// import usePageQuery from '../queries/usePageQuery';

const Template = () => {
	// const data = usePageQuery();
	// const { markdownRemark } = data; // data.markdownRemark holds your post data
	// const { frontmatter, html } = markdownRemark;

	// console.log("Page lives", data);

	return (
		<div className="blog-post-container">
			<div className="blog-post">
				Content of the page, static so far
				{/* <h1>{frontmatter.title}</h1>
				<h2>{frontmatter.date}</h2>
				<div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} /> */}
			</div>
		</div>
	);
};
export default Template;
