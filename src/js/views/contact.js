import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contact = () => {
	return (
		<div className="contact-container">
			<div className="skills-container d-flex justify-content-center">
				{/* Left side img */}
				<div className="skills-lrcontainer">
					<div className="skills-limg">
						<img className="skills-img" src="https://i.imgur.com/IzHZHkK.gif" />
					</div>
				</div>
				{/* Right side text */}
				<div className="skills-rtext">
					<h1 className="skills-h1">What I do</h1>
					<h4 className="skills-h2">
						These are the languages I have learned so far, the list is growing and constantly being updated:
						<br />
					</h4>
				</div>
			</div>
		</div>
	);
};
