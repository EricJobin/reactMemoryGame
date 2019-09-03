import React from "react";
import "./style.css";

const MemCard = (props) => {
	// console.log(props)

	return (
		// <div className="card" id={props.id}>
		<div className="card">
			{/* {console.log(props)} */}
			{/* {console.log(props.data.name)} */}
			<div className="img-container">
				<img src={props.image} 
					alt={props.alt}
					id={props.id}
					onClick={() => props.cardClick(props.id)}
				/>
			</div>
		</div>
	);
}

export default MemCard;
