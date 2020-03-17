import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Projects = () => {
	return (
		<div className="projects-container">
			<div className="projects-container-child d-flex justify-content-center">
				{/* Centered */}
				<div className="projects-text">
					<h1 className="skills-h1">Projects</h1>
					<br />
				</div>
				<div className="projects-cards d-flex justify-content-around" />
			</div>
		</div>
	);
};
