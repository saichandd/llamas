import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slideshow from '../Slideshow/Slideshow';

class FunFacts extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			// FunFacts component
			<div className="funfacts-container">
				<header>
					<h1 className="child-h1">Fun Facts</h1>
				</header>
				<Slideshow/>
				{/*
				<ul>
					<li>
						<p className="para">
							The llama is a South American relative of the camel, though the llama does not have a hump.
						</p>
					</li>
					<li>
						<p className="para">
							These sturdy creatures are domestic animals used by the peoples of the Andes Mountains. (Their wild relatives are guanacos and vicuñas). Native peoples have used llamas as pack animals for centuries. Typically, they are saddled with loads of 50 to 75 pounds. Under such weight they can cover up to 20 miles in a single day. Pack trains of llamas, which can include several hundred animals, move large amounts of goods over even the very rough terrain of the Andes.
							<br/>
							Llamas are willing pack animals but only to a point. An overloaded llama will simply refuse to move. These animals often lie down on the ground and they may spit, hiss, or even kick at their owners until their burden is lessened.
						</p>
					</li>
					<li>
						<p className="para">
							Llamas graze on grass and, like cows, regurgitate their food and chew it as cud. They chomp on such wads for some time before swallowing them for complete digestion. Llamas can survive by eating many different kinds of plants, and they need little water. These attributes make them durable and dependable even in sparse mountainous terrain.
						</p>
					</li>
				</ul>
			*/}
			</div>	
			// FunFacts component ends
		)
		
	}
}

export default FunFacts;