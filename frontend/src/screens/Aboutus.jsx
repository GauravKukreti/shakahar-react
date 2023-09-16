import React from "react";
import Profile from "../assets/images/social/profile.jpg";
import Profile1 from "../assets/images/social/profile1.jpg";
import Profile2 from "../assets/images/social/profile2.png";
import Profile3 from "../assets/images/social/profile3.png";
import Profile4 from "../assets/images/social/profile4.png";
import Facebook from "../assets/images/social/facebook.png";
import Linkedin from "../assets/images/social/linkedin.1024x1024.png";
import "./About.css";

const Aboutus = () => {
	return (
		<div className="about">
			<div id="text">
				<p className="headingg">Welcome to The Shakahar Store</p>
				<p className="inside">
					Online store for selling vegetables and fruits. We have a diverse
					collection of seasonal vegetables and fruits at right prices.
				</p>
				<p className="headingg">Our Mission</p>
				<p className="inside">
					Our mission is to promote a healthy lifestyle by offering a wide range
					of organic fruits and vegetables that are locally sourced and free
					from harmful pesticides. We aim to educate and inspire people to make
					better food choices for themselves and the planet.
				</p>
			</div>

			<div id="developers">
				<p className="headingg">People developing SHAKAHAR</p>
				<div className="cardss">
					<div id="row">
						{/* <!--- Developer 1 ---> */}
						<div className="cards">
							<img src={Profile2} width="100%" alt="dev 1" />
							<span>Piyush Dimri</span>
							<div>
								<a href="https:/www.facebook.com">
									<img src={Facebook} width="40px" alt="facebook" />
								</a>
								<a href="https:/www.linkedin.com">
									<img src={Linkedin} width="40px" alt="linkedin" />
								</a>
							</div>
						</div>

						{/* <!--- Developer 2 ---> */}
						<div className="cards">
							<img src={Profile1} width="100%" alt="dev 1" />
							<span>Gaurav Kukreti</span>
							<div>
								<a href="https:/www.facebook.com">
									<img src={Facebook} width="40px" alt="facebook" />
								</a>
								<a href="https:/www.linkedin.com">
									<img src={Linkedin} width="40px" alt="linkedin" />
								</a>
							</div>
						</div>

						{/* <!--- Developer 3 ---> */}
						<div className="cards">
							<img src={Profile3} width="100%" alt="dev 1" />
							<span>Yugansh Gola</span>
							<div>
								<a href="https:/www.facebook.com">
									<img src={Facebook} width="40px" alt="facebook" />
								</a>
								<a href="https:/www.linkedin.com">
									<img src={Linkedin} width="40px" alt="linkedin" />
								</a>
							</div>
						</div>

						{/* <!--- Developer 4 ---> */}
						<div className="cards">
							<img src={Profile4} width="100%" alt="dev 1" />
							<span>Arin Aggarwal</span>
							<div>
								<a href="https:/www.facebook.com">
									<img src={Facebook} width="40px" alt="facebook" />
								</a>
								<a href="https:/www.linkedin.com">
									<img src={Linkedin} width="40px" alt="linkedin" />
								</a>
							</div>
						</div>

						{/* <!--- Developer 5 ---> */}
						<div className="cards">
							<img src={Profile} width="100%" alt="dev 1" />
							<span>Sharik Khan</span>
							<div>
								<a href="https:/www.facebook.com">
									<img src={Facebook} width="40px" alt="facebook" />
								</a>
								<a href="https:/www.linkedin.com">
									<img src={Linkedin} width="40px" alt="linkedin" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Aboutus;
