import React from "react";
import "./style.css";

const Scoreboard = (props) => {
	return (
		<div className="scoreboard">
			<div className="">
				Status: {props.gameState}
				<br/>
				Score: {props.score}
			</div>
		</div>
	);
}

export default Scoreboard;