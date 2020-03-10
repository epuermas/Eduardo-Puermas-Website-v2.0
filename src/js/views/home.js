import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	return (
		<div className="home-container">
			<div className="home-lcontainer d-flex justify-content-center">
				<div className="home-ltext">
					<h1 className="home-h1">Hello, my name is Eddy</h1>
					<h4 className="home-h2">
						Dedicated web developer constantly learning <br /> and using the latest front-end and back-end
						technologies. <br />
						Excited about opportunities where experience can best be leveraged towards working on projects
						in a team environmnt
					</h4>
				</div>
				<div className="home-rcontainer" />
				<div className="home-rlimg">
					<img className="home-img" src="https://www.webvillage.in/assets/img/about.gif" />
				</div>
			</div>
		</div>
	);
};
