import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import mem from "./mem.json"
import MemCard from "./components/MemCard";

class App extends Component {
	state = {
		chosen: [],
		score: 0,
	};

	cardClick = () =>{
		// console.log(event);
		// console.log("click");
		// console.log(this);



	}

	render() {
		return (
			<Wrapper>
				{/* {console.log(this)} */}
				{mem.map(
					

					// <MemCard
					// 	id={mem.id}
					// 	alt={mem.alt}
					// 	image={mem.image}
					// 	// cardClick={this.cardClick}
					// />
					// console.log(App.cardClick),
					(f, {cardClick}) => (<MemCard {...f} />)
				)}
			</Wrapper>
		);
	}
}

export default App;


