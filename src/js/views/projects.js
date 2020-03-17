import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from "../component/card";

export const Projects = () => {
	return (
		<div className="projects-container">
			<div className="projects-container-child d-flex                 justify-content-center">
				<h1 className="skills-h1">Open Source Projects</h1>
			</div>
			<br />
			<div className="projects-cards-top d-flex justify-content-around">
				<Card />
			</div>
		</div>
	);
};
