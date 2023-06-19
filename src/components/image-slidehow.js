/**
 * image-slidehow.js
 * Rob Barton 2023
 */

import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Carousel from 'nuka-carousel';

export default function ImageSlidehow({ images }) {
	return (
		<Carousel wrapAround={true} autoplay={true}>
			{images.map((image, index) => {
				const img = getImage(image);
				return <GatsbyImage image={img} key={index} alt={image} />;
			})}
			;
		</Carousel>
	);
}
