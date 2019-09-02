import React from "react";
import "./style.css";

const MemCard = (props, fn) => {
	// console.log(fn)

	return (
		<div className="card" id={props.id}>
			{/* {console.log(props)} */}
			{/* {console.log(props.data.name)} */}
			<div className="img-container">
				<img src={props.image} alt={props.alt}
					// onClick={() => cardClick()}
				/>
			</div>
		</div>
	);
}

export default MemCard;
