import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

const Hero = () => {
	return (
		<section className="px-2 py-4 md:py-8 sm:px-4 lg:py-8">
			<div className="flex flex-col items-center mb-2">
				<div className="p-1 mb-2 w-32 h-32 lg:w-48 lg:h-48">
					<StaticImage
						src="../images/profile_photo.jpg"
						className="object-cover rounded-full"
						alt="A dinosaur"
						placeholder="blurred"
						width={512}
						height={512}
					/>
				</div>
				<div className="mx-auto mb-2 text-center prose prose-headings:m-2">
					<h1 className="text-3xl font-bold font-title font-festive md:text-4xl xl:text-5xl">
						Rob Barton
					</h1>
					<h5 className="text-base md:text-lg xl:text-xl">
						developer, london uk
					</h5>
				</div>
				<div className="mx-auto mb-2 max-w-none text-center prose md:prose-ul:px-4 prose-ul:p-0 prose-headings:m-2">
					<div className="grid grid-cols-1 md:grid-cols-3">
						<ul className="list-none">
							<li className="p-0 font-bold underline">Programming Languages</li>
							<li className="p-0">C#</li>
							<li className="p-0">C++</li>
							<li className="p-0">MSSQL</li>
							<li className="p-0">Javascript</li>
							<li className="p-0">HTML & CSS</li>
						</ul>
						<ul className="list-none">
							<li className="p-0 font-bold underline">
								Frameworks & Libraries
							</li>
							<li className="p-0">ASP.NET</li>
							<li className="p-0">OpenGL</li>
							<li className="p-0">CUDA</li>
							<li className="p-0">React</li>
							<li className="p-0">Tailwind</li>
						</ul>
						<ul className="list-none">
							<li className="p-0 font-bold underline">Tools & Technologies</li>
							<li className="p-0">Unity Engine</li>
							<li className="p-0">UNIX</li>
							<li className="p-0">GIT</li>
							<li className="p-0">CMake</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
