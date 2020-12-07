import React from "react";

import Navbar from "./Navbar";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<React.Fragment>
			<Navbar />
		</React.Fragment>
	);
}
