import React from "react";
import Header from "./Header";
import Lead from "./Lead";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

export default class Components extends React.Component {
	render() {
		return (
			<>
				<Header />
				<Lead />
				<Experience />
				<Education />
				<Projects />
				<Skills />
				<About />
				<Contact />
				<Footer />
			</>
		);
	}
}