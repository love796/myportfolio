import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

type Props = { experience: Experience };

const ListItem: React.FC<Props> = (props: Props) => {
	const experience = props.experience;
	return (
		<>
			<div className="vtimeline-icon">
				<FontAwesomeIcon icon={faMapMarkerAlt} />
			</div>
			<div className="vtimeline-point">
				<div className="vtimeline-block">
					<span className="vtimeline-date">{experience.date}</span>
					<div className="vtimeline-content">
						<h3>{experience.title}</h3>
						<h4>
							<a href={experience.link} target="_blank" rel="noreferrer">
								{experience.name}
							</a>
						</h4>
						<p>{experience.description}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ListItem;
