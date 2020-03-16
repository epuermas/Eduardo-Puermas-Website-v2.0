import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Skills = () => {
	return (
		<div className="skills-container">
			<div className="skills-rcontainer d-flex justify-content-center">
				{/* Left side img */}
				<div className="skills-lcontainer">
					<div className="skills-limg">
						<img className="skills-img" src="https://i.imgur.com/IzHZHkK.gif" />
					</div>
				</div>
				{/* Right side text */}
				<div className="skills-rtext">
					<h1 className="skills-h1">What I do</h1>
					<h4 className="skills-h2">
						Dedicated web developer constantly learning <br /> and using the latest front-end and back-end
						technologies. <br />
						<br />
						Excited about opportunities where experience can best be leveraged towards working on projects
						in a team environmnt
					</h4>
				</div>
			</div>
		</div>
	);
};
