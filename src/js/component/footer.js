import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<img className="footer-logo" src="https://i.imgur.com/uZlJ0ZH.png" />
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="https://github.com/epuermas" target="_blank" rel="noopener noreferrer">
				Eduardo Puermas
			</a>
		</p>
		<p className="copyright-info">© 2020 Copyright Eduardo Puermas</p>
	</footer>
);
