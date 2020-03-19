import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contact = () => {
	return (
		<div className="contact-container">
			<div className="contact-container d-flex justify-content-center">
				{/* Right side text */}
				<div className="contact-rtext">
					<h1 className="contact-h1">Contact Me ☎️</h1>
					<h4 className="contact-h2">
						To discuss a project or just want to say hi, my inbox is open for all:
						<br />
					</h4>
					<h2 className="contact-info">
						786-317-8698
						<br />
						eduardopuermas@hotmail.com
					</h2>
					<div className="contact-lsocial">
						<a
							className="fab fa-github-square"
							href="https://github.com/epuermas"
							id="github"
							target="_blank"
							rel="noopener noreferrer"
						/>
						<a
							className="fab fa-linkedin"
							href="https://www.linkedin.com/in/epuermas/"
							id="linkedin"
							target="_blank"
							rel="noopener noreferrer"
						/>
						<a
							className="fab fa-facebook-square"
							href="https://www.facebook.com/HeartagramEd"
							id="facebook"
							target="_blank"
							rel="noopener noreferrer"
						/>
						<a
							className="fab fa-twitter-square"
							href="https://twitter.com/Eddy_Prms"
							id="twitter"
							target="_blank"
							rel="noopener noreferrer"
						/>
					</div>
				</div>
				{/* Left side img */}
				<div className="linkedin-badge contact-lrcontainer">
					<div className="contact-limg">
						<img className="contact-img" src="https://i.imgur.com/NJQT0Ue.gif" />
					</div>
				</div>
			</div>
		</div>
	);
};
