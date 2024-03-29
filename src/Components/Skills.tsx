import React from "react";
import SkillPopover from "./Sub-Components/skill-popover";
import { OverlayTrigger } from "react-bootstrap";

type Props = { skillsList: Skill[] };

const Skills = (props: Props) => {
	const skills = props.skillsList;

	return (
		<section id="skills">
			<h2 className="heading">Skills</h2>
			<ul>
				{skills.map((skill, index) => {
					return (
						<OverlayTrigger key={index} placement="top" overlay={SkillPopover(skill)}>
							<li>{skill.name}</li>
						</OverlayTrigger>
					);
				})}
			</ul>
		</section>
	);
};

export default Skills;
