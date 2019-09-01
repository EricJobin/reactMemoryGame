import React from "react";
import "./style.css";

function MemCard(props) {
	return (
		<div className="card" id={props.id}>
			{console.log(props)}
			{/* {console.log(props.data.name)} */}
			<div className="img-container">
				<img src={props.image}/>
			</div>
		</div>
	);
}

export default MemCard;
