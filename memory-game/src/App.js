import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import mem from "./mem.json"
import MemCard from "./components/MemCard";
import Scoreboard from "./components/Scoreboard";

class App extends Component {
	state = {
		chosen: [],
		score: 0,
		cardOrder: [1,2,3,4,0,5,6,7,8],
		gameState: ""
	};

	cardShuffle = () =>{
		const newOrder =[];
		for (let i = 0; i<9;){
			let ranNum = Math.floor(Math.random() *9)
			if(newOrder.includes(ranNum)){}
			else{
				newOrder.push(ranNum);
				i++;
			}
		}
		this.setState({cardOrder: newOrder})
	}

	cardClick = (id) =>{
		if(this.state.chosen.includes(id)){
			this.setState({chosen: []});
			this.setState({gameState: "Already Clicked, You lose! Try Again?"});
			this.setState({score: 0});
		}
		else {
			this.setState({gameState: "Good Choice!"});
			this.state.chosen.push(id);
			this.setState({score: this.state.chosen.length});
		}
		if(this.state.chosen.length === 9){
			this.setState({chosen: []});
			this.setState({gameState: "Congratulations! You've got them all! Play Again?"});
			this.setState({score: 0});
		}
		this.cardShuffle()
	}

	render() {
		let cards = this.state.cardOrder
		return (
			<Wrapper>
				<Scoreboard
					score={this.state.score}
					gameState={this.state.gameState}
				/>
							
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


