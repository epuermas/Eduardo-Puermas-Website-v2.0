import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Skills = () => {
	return (
		<div className="skills-container">
			{/* Right side text */}
			<div className="skills-rcontainer d-flex justify-content-center">
				<div className="skills-rtext">
					<h1 className="skills-h1">Hello, my name is Eddy</h1>
					<h4 className="skills-h2">
						Dedicated web developer constantly learning <br /> and using the latest front-end and back-end
						technologies. <br />
						<br />
						Excited about opportunities where experience can best be leveraged towards working on projects
						in a team environmnt
					</h4>
				</div>
				{/* Left side img */}
				<div className="skills-lcontainer">
					<div className="skills-llimg">
						<img className="skills-img" src="https://www.webvillage.in/assets/img/about.gif" />
					</div>
				</div>
			</div>
		</div>
	);
};
