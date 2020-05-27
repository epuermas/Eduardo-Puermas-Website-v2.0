import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Skills } from "./skills";
import { Modal, Button } from "react-bootstrap";
import { Projects } from "./projects";
import { Hello } from "./hello";
import { Contact } from "./contact";
import { About } from "./aboutme";

export const Home = () => {
	// const [lgShow, setLgShow] = useState(false);
	// const [show, setShow] = useState(false);
	// const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);
	return (
		<div className="home-container">
			<Hello />
			<br />
			<About />
			<br />
			<Skills />
			<br />
			<Projects />
			<br />
			<Contact />
		</div>
	);
};
