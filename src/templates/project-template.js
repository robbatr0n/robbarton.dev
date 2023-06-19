/**
 * project-template.js
 * Rob Barton 2023
 */

import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import ProjectLinks from '../components/project-links';
import ImageSlidehow from '../components/image-slidehow';

const ProjectTemplate = ({ data }) => {
	const project = data.markdownRemark;
	return (
		<Layout>
			<section className="flex flex-col items-center px-2 py-4 md:py-8 sm:px-4">
				<div className="w-full prose">
					<div className="flex flex-col items-center pt-4 text-center lg:pt-8 xl:prose-lg font-body">
						<h3 className="font-bold">{project.frontmatter.title}</h3>
						<p>{project.frontmatter.desc}</p>
						<div>
							<ProjectLinks
								projectLinks={project.frontmatter.links}
								projectName={project.frontmatter.title}
							/>
						</div>
					</div>
					<div className="flex flex-col py-4 mx-auto">
						<p
							className="mb-0"
							dangerouslySetInnerHTML={{ __html: project.html }}
						/>
					</div>
					<div>
						<ImageSlidehow images={project.frontmatter.slideshowImages} />
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default ProjectTemplate;

export const query = graphql`
	query getProject($slug: String) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				desc
				slideshowImages {
					childImageSharp {
						gatsbyImageData
					}
				}
				tags
				links
			}
		}
	}
`;
