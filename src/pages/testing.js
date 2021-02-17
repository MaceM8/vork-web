import React from 'react';
// import { graphql } from "gatsby"

import Layout from '../components/Layout';
// import SEO from "../components/seo"
import Heading from '../components/Heading';
import Section from '../components/Section';
import Button from '../components/Button';
import Text from '../components/Text';
import Link from '../components/Link';
import BlogPostsSection from '../components/BlogPostsSection';
// import Customers from "../components/Customers"

const IndexPage = ({ data }) => (
	<Layout>
		{/* <SEO title="Home" /> */}

		<Section>
			<Heading>Some heading</Heading>
			<Text>Some text</Text>
			<Link to="/">
				<Button>Link to some place</Button>
			</Link>
		</Section>
		<BlogPostsSection
			heading={'Inspirujte se na našem blogu'}
			text={'Náš blog - naše, a třeba i vaše inspirace'}
		/>
		<Section center>
			<Heading>Bottom text</Heading>
			{/* Uncomment after partners give consent */}
			{/* <Customers /> */}
		</Section>
	</Layout>
);

export default IndexPage;

// export const pageQuery = graphql`
//   query HomepageQuery {
//     strapiHomepage {
//       title
//       text
//       buttonText
//       buttonLink
//       bottomText
//       bottomButtonText
//       bottomButtonLink
//       # blogPostHeading
//       # BlogPostText
//     }
//   }
// `
