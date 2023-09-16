import React from "react";
import "./Contact.css";
import { useSelector } from "react-redux";

const Contactus = () => {
	// const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	return (
		<div id="hero">
			<div id="sometext">
				<p id="sometext1">Contact us</p>
				<p id="sometext2">
					// Submit the form below or shoot us an email -
					<span> shakahar_official@gmail.com</span>
				</p>
			</div>
			<div id="contact">
				<form
					action="https://getform.io/f/cf7d5573-b688-4865-ae95-bf23def73a74"
					method="POST"
					id="contact_form"
				>
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={userInfo ? userInfo.name : ""}
					/>
					<input
						type="email"
						name="email"
						placeholder="Email"
						value={userInfo ? userInfo.email : ""}
					/>
					<textarea
						name="message"
						id="textareaa"
						rows="10"
						placeholder="Message"
					></textarea>
					<div class="submit-btn">
						<button type="submit" id="btn-submit">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contactus;
