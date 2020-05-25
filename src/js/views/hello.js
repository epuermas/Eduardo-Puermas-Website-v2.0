import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Skills } from "./skills";
import { Modal, Button } from "react-bootstrap";
import { Projects } from "./projects";

export const Hello = () => {
	const [lgShow, setLgShow] = useState(false);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="hello-container">
			{/* Left side text */}
			<div className="home-lcontainer d-flex justify-content-center">
				<div className="home-ltext">
					<h1 className="home-h1">Hello, my name is Eddy 👋🏻</h1>
					<h4 className="home-h2">
						Full-Stack Web Developer
						<br />
						Based in Miami, FL
					</h4>
					<div className="home-lsocial">
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
						{/* <a
							className="fab fa-twitter-square"
							href="https://twitter.com/Eddy_Prms"
							id="twitter"
							target="_blank"
							rel="noopener noreferrer"
						/> */}
						<a
							className="fab fa-instagram-square"
							href="https://www.instagram.com/eddy_prms/"
							id="instagram"
							target="_blank"
							rel="noopener noreferrer"
						/>
						<br />
						<Button variant="btn btn-primary btn-lg" onClick={handleShow} id="resume-button">
							View Resume
						</Button>
						<Link to={"/contact"} type="button" className="btn btn-primary btn-lg" id="contact-me-button">
							Contact Me
						</Link>

						<Modal
							show={show}
							size="lg"
							onHide={handleClose}
							dialogClassName="modal-150w"
							className="modal">
							<Modal.Header closeButton>
								<Modal.Title>
									<p className="modal-title">Resume</p>
								</Modal.Title>
							</Modal.Header>

							<Modal.Body>
								<div>
									<img className="resume" src="https://i.imgur.com/0GnYBQQ.jpg" />
								</div>
							</Modal.Body>

							<Modal.Footer>
								<Button variant="primary" id="modal-button" onClick={handleClose}>
									<p>Close</p>
								</Button>
							</Modal.Footer>
						</Modal>
					</div>
				</div>
				{/* Right side img */}
				<div className="home-rcontainer">
					<div className="home-rimg">
						<img className="home-img" src="https://i.imgur.com/1APjIvj.gif" />
					</div>
				</div>
			</div>
		</div>
	);
};
