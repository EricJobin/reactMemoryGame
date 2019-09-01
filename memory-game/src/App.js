import React from "react";
import Wrapper from "./components/Wrapper";

import mem from "./mem.json"

import MemCard from "./components/MemCard";

function App() {
	return (
		<Wrapper>
			{mem.map(
				f => (<MemCard {...f} />)
			)}
		</Wrapper>
	);
}

export default App;
