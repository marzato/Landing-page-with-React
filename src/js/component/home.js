import React from "react";

import Navbar from "./Navbar.js";
import Jumbotron from "./Jumbotron.js";

//include images into your bundle
//  import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<React.Fragment>
			<Navbar />
			<Jumbotron />
		</React.Fragment>
	);
}
