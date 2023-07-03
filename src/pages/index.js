/**
 * index.js
 * Rob Barton 2023
 */

import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';
import ProjectShowcase from '../components/project-showcase';

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<Hero />
			<ProjectShowcase
				games={data.games}
				software={data.software}
				prototypes={data.prototypes}
				misc={data.misc}
			/>
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
	query fetchProjects {
		games: allMarkdownRemark(
			filter: { frontmatter: { category: { eq: "games" } } }
		) {
			nodes {
				frontmatter {
					desc
					slug
					title
					tags
					thumbnail {
						childImageSharp {
							gatsbyImageData(
								placeholder: BLURRED
								aspectRatio: 1.5
								transformOptions: { fit: FILL }
							)
						}
					}
				}
				html
			}
		}
		software: allMarkdownRemark(
			filter: { frontmatter: { category: { eq: "software" } } }
		) {
			nodes {
				frontmatter {
					desc
					slug
					title
					tags
					thumbnail {
						childImageSharp {
							gatsbyImageData(
								placeholder: BLURRED
								aspectRatio: 1.5
								transformOptions: { fit: FILL }
							)
						}
					}
				}
				html
			}
		}

		prototypes: allMarkdownRemark(
			filter: { frontmatter: { category: { eq: "prototypes" } } }
		) {
			nodes {
				frontmatter {
					desc
					slug
					title
					tags
					thumbnail {
						childImageSharp {
							gatsbyImageData(
								placeholder: BLURRED
								aspectRatio: 1.5
								transformOptions: { fit: FILL }
							)
						}
					}
				}
				html
			}
		}

		misc: allMarkdownRemark(
			filter: { frontmatter: { category: { eq: "misc" } } }
		) {
			nodes {
				frontmatter {
					desc
					slug
					title
					tags
					thumbnail {
						childImageSharp {
							gatsbyImageData(
								placeholder: BLURRED
								aspectRatio: 1.5
								transformOptions: { fit: FILL }
							)
						}
					}
				}
				html
			}
		}
	}
`;
