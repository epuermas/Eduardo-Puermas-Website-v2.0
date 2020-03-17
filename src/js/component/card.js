import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = () => {
	const { store, actions } = useContext(Context);
	console.log("data", store.cards);
	return (
		<div className="card-container d-flex justify-content-around">
			{store.cards &&
				store.cards.map((e, index) => (
					<div key={index} className="card" style={{ width: "18rem" }}>
						{/* <img
					src="https://image.shutterstock.com/image-vector/grunge-red-sample-word-round-260nw-1242668641.jpg"
					className="card-img-top"
					alt="..."
				/> */}
						<div className="card-body">
							<h5 className="card-title">{e.title}</h5>
							<p className="card-text">{e.description}</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				))}
		</div>
	);
};
export default Card;
