/**
 * layout.js
 * Rob Barton 2023
 */

import * as React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => {
	return (
		<div className="font-body">
			<Navbar />
			<main className="container relative px-2 mx-auto sm:px-4">
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
