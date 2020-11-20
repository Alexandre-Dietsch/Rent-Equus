import React from "react";
import data from "../../data/horses.json";
import { Link } from "react-router-dom";
import '../../styles/horsesLibrary.css';

function HorsesLibrary() {
	return (
		<div className='library-container'>
			{
				data.map(horse => (
					<div key={horse.name}>
						<img style={{ width: '30%' }} src={horse.image} alt={horse.name} />
						<h3>{horse.name}</h3>
						<Link to={`/horse-profile/${horse.index}`}>
							<button index={horse.index} type="submit" name={horse.name} >{horse.name}</button>
						</Link>
					</div>
				))
			}
		</div>
	)
}

export default HorsesLibrary;





