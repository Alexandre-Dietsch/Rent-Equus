import React from "react";
import data from "../../data/horses.json";
import { Link } from "react-router-dom";
import '../../styles/horsesLibrary.css';

function HorsesLibrary() {
	return (
		<div className='library-container'>
			{
				data.map(horse => (
					<div className="Container" key={horse.name}>
						<img className="imghorse" style={{ width: '65%' }} src={horse.image} alt={horse.name} />
						<Link to={`/horse-profile/${horse.index}`}>
							<button className="horsebutton" index={horse.index} type="submit" name={horse.name} >{horse.name}</button>
						</Link>
					</div>
				))
			}
		</div>
	)
}

export default HorsesLibrary;





