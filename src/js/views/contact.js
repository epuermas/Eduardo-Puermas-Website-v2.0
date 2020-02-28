import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contact = () => {
	return (
		<div className="contact-container">
			<p>{"Some text in contact me"}</p>
		</div>
	);
};
