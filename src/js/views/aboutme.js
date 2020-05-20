import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Projects } from "../views/projects";

export const About = () => {
	return (
		<div className="about-container">
			<div className="about-tcontainer">
				<h1 className="about-h1">About Me</h1>
				<h4 className="about-p">
					Dedicated web developer with a background in the legal field, constantly learning and using the
					latest front-end and back-end technologies.
					<br />
					<br />
					Excited about opportunities where experience can best be leveraged towards working on projects in a
					team environment.
				</h4>
			</div>
			<div className="prior-exp-container d-flex justify-content-center">
				{/* MarketSource img & link */}
				<div className="marketsource">
					<a href="https://www.marketsource.com/" target="_blank" rel="noopener noreferrer">
						<img
							className="marketsource-img"
							src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/01c9e8afe2ca1ab6a1af8b7fbf68df1e"
						/>
					</a>
					<h4 className="marketsource-head">MarketSource</h4>
					<h5 className="marketsource-position">Team Lead</h5>
					<p className="marketsource-text">September 2016 - July 2017</p>
				</div>
				{/* Carnival img & link */}
				<div className="carnival">
					<a href="https://www.carnival.com/" target="_blank" rel="noopener noreferrer">
						<img className="carnival-img" src="https://i.imgur.com/GEuwwZF.jpg" />
					</a>
					<h4 className="carnival-head">Carnival Cruise Lines</h4>
					<h5 className="carnival-position">Guest Service Agent</h5>
					<p className="carnival-text">July 2017 - July 2018</p>
				</div>
				{/* SM Law img & link */}
				<div className="smlaw">
					<a href="https://www.smorganlaw.com/" target="_blank" rel="noopener noreferrer">
						<img className="smlaw-img" src="https://i.imgur.com/3f4b6tB.jpg" />
					</a>
					<h4 className="smlaw-head">Spencer Morgan Law</h4>
					<h5 className="smlaw-position">Legal Assistant</h5>
					<p className="smlaw-text">July 2018 - Present</p>
				</div>
				{/* JS img & link */}
				<div className="javascript">
					<a href="https://github.com/epuermas" target="_blank" rel="noopener noreferrer">
						<img className="javascript-img" src="https://cdn.auth0.com/blog/es6rundown/logo.png" />
					</a>
					<h4 className="javascript-head">Full-Stack Web Developer</h4>
					<h5 className="javascript-position">Freelance</h5>
					<p className="javascript-text">November 2019 - Present</p>
				</div>
			</div>
		</div>
	);
};
