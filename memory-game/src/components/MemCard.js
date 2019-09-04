import React from "react";
import "./style.css";

const MemCard = (props) => {
	return (
		<div className="card">
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
