import React from "react";
import "./Footer.css";
import { LinkContainer } from "react-router-bootstrap";
import Flogo from "../assets/images/flogo.png";
import facebook from "../assets/images/social/facebook.png";
import instagram from "../assets/images/social/instagram.png";
import youtube from "../assets/images/social/youtube.png";
import linkedin from "../assets/images/social/linkedin.1024x1024.png";
import { Container } from "react-bootstrap";

const Footer = () => {
	return (
		<div class="footer">
			<div class="flogo">
				<LinkContainer to="/">
					<img src={Flogo} alt="logo" height="60px" />
				</LinkContainer>
			</div>
			<div class="social">
				<div>Follow us on:</div>
				<div id="social_logo">
					<a href="#">
						<img src={facebook} alt="facebook" height="55px" />
					</a>
					<a href="#">
						<img src={instagram} alt="instagram" height="55px" />
					</a>
					<a href="#">
						<img src={youtube} alt="youtube" height="55px" />
					</a>
					<a href="#">
						<img src={linkedin} alt="telegram" height="55px" />
					</a>
				</div>
			</div>
			<div class="flink">
				<div class="flinks">
					<a href="/contactus">Contact us</a>
					<a href="/aboutus">About us</a>
					<a href="#">FAQs</a>
				</div>
				<div class="flinks">
					<a href="/predict">Predict</a>
					<a href="#">Privacy Policy</a>
					<a href="#">Terms of Use</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
