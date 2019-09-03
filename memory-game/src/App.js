import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import mem from "./mem.json"
import MemCard from "./components/MemCard";

class App extends Component {
	state = {
		chosen: [],
		score: 0,
	};

	cardClick = (id) =>{
		console.log(id);
		if(this.state.chosen.includes(id)){
			console.log("Already Clicked, You lose!");
			this.setState({chosen: []});
			// console.log(this.state.chosen)
		}
		else {
			console.log("Good Choice!");
			this.state.chosen.push(id);
			// console.log(this.state.chosen);
			// console.log(this.state.chosen.length);
		}
		if(this.state.chosen.length === 9){
			console.log("Good Job, you've clicked them all!!!")
			this.setState({chosen: []});
		}
		// Call a function to shuffle cards here
	}

	render() {
		let cards = [1,2,3,4,0,5,6,7,8]
		return (
			<Wrapper>
			
				{/* {mem.map(

					(mem, i) => (<MemCard 
						{...mem} // Breaks out mem data for rendering each card
						key={i} // Gives each card a react key i
						cardClick={this.cardClick} // This is where the click function gets passed in
						/>)
				)} */}

				
				{/* Ok, this function will map out cards in whatever order the cards array shows, based on index */}
				{cards.map(

					(cards, i) => (<MemCard 
						{...mem[cards]} // Breaks out mem data for rendering each card
						key={i} // Gives each card a react key i
						cardClick={this.cardClick} // This is where the click function gets passed in
						/>)
				)}




			</Wrapper>
		);
	}
}

export default App;


