import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = () => {
	const { store, actions } = useContext(Context);
	console.log("data", store.cards);
	return (
		<div className="card-container">
			<div className="card" style={{ width: "18rem" }}>
				{/* <img
					src="https://image.shutterstock.com/image-vector/grunge-red-sample-word-round-260nw-1242668641.jpg"
					className="card-img-top"
					alt="..."
				/> */}
				<div className="card-body">
					<h5 className="card-title">Sample Card Title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
export default Card;