import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BiDownArrowAlt } from 'react-icons/bi';
import Collapsible from 'react-collapsible';
import { useState } from 'react';
import * as React from 'react';
import { Link } from 'gatsby';

const ProjectShowcase = ({ games, software, prototypes, misc }) => {
	return (
		<>
			<ProjectShowcaseSection projects={software.nodes} title="software" />
			<ProjectShowcaseSection projects={games.nodes} title="games" />
			<ProjectShowcaseSection projects={prototypes.nodes} title="prototypes" />
			<ProjectShowcaseSection projects={misc.nodes} title="misc" />
		</>
	);
};

const ProjectShowcaseSection = ({ projects, title }) => {
	const [show, setShow] = useState(false);
	const handleClick = () => {
		setShow((s) => !s);
	};
	return (
		<section
			className={`px-2 py-4 text-xl  md:text-2xl sm:px-4 font-body ${
				show ? '' : ''
			}`}>
			<Collapsible
				trigger={
					<div className="flex underline flex-col justify-center items-center font-bold text-center">
						{title}
						{show ? (
							<BiDownArrowAlt
								className="mb-4 text-center xl:mt-2"
								style={{ transform: 'rotate(180deg)' }}
							/>
						) : (
							<BiDownArrowAlt className="mb-4 text-center" />
						)}
					</div>
				}
				onOpening={() => handleClick(true)}
				onClosing={() => handleClick(false)}>
				<div className="grid grid-cols-1 md:grid-cols-3">
					{projects.map((project, index) => {
						const projectData = project.frontmatter;
						const image = getImage(projectData.thumbnail);
						return (
							<div key={index} className="md:p-4">
								<Link to={'/projects/' + projectData.slug}>
									<GatsbyImage image={image} alt={projectData.title} />
								</Link>
								<div className="py-4 mb-6 text-center prose-sm">
									<h3 className="font-bold">{projectData.title}</h3>
									<p className="">{projectData.desc}</p>
									<div>
										{
											<ul className="flex justify-center p-0">
												{projectData.tags.map((tag, index) => {
													return (
														<li
															className="inline-flex items-center px-4 py-2 mx-2 my-4 text-xs font-bold rounded-full border leading-sm"
															key={index}>
															{tag}
														</li>
													);
												})}
											</ul>
										}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</Collapsible>
		</section>
	);
};

export default ProjectShowcase;
