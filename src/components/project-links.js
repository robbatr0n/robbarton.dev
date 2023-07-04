/**
 * project-links.js
 * Rob Barton 2023
 */

import * as React from 'react';
import { FaGithub } from 'react-icons/fa';
import { TfiWorld } from 'react-icons/tfi';

const ProjectLinks = ({ projectLinks, projectName }) => {
	let linkElements = [];
	projectLinks.forEach(function (item, index) {
		if (item.toLowerCase() === 'github') {
			linkElements.push(
				<a className="mx-2" key={index} href={buildGithubLink(projectName)}>
					<FaGithub />
				</a>
			);
		} else if (item.toLowerCase() !== 'demo') {
			linkElements.push(
				<a className="mx-2" key={index} href={item}>
					<TfiWorld />
				</a>
			);
		}
	});
	return <div className="flex">{linkElements}</div>;
};

function buildGithubLink(projectName) {
	return `https://www.github.com/robmakesgames/${projectName
		.split(' ')
		.join('-')}`;
}

export default ProjectLinks;
