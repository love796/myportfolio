import React from "react";
import { Info } from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default class Lead extends React.Component {
	ref: React.RefObject<HTMLElement>;
	constructor(props: String) {
		super(props);
		this.ref = React.createRef();
		this.scrollDown = this.scrollDown.bind(this);
	}

	info = Info;

	bg = { background: "url('images/lead-bg.jpg')" };

	scrollDown() {
		this.ref.current?.scrollIntoView({ behavior: "smooth" });
	}

	render() {
		return (
			<>
				<div id="lead" style={this.bg}>
					<div id="lead-content">
						<h1>{this.info.name}</h1>
						<h2>{this.info.occupation}</h2>
						<a href="#about" className="btn-rounded-white">
							Download Resume
						</a>
					</div>

					<div id="lead-overlay"></div>

					<div id="lead-down" onClick={this.scrollDown}>
						<span>
							<FontAwesomeIcon icon={faChevronDown} />
						</span>
					</div>
				</div>
				<span ref={this.ref}></span>
			</>
		);
	}
}
