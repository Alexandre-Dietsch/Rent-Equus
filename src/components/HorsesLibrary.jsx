import React from "react";
import data from "../data/horses.json";
import { Link } from "react-router-dom";


function HorsesLibrary() {
  return (
		<div>
			{
				data.map(horse => (
					<div key={horse.name}> 
						<img scr= {horse.image} alt={ horse.name } />
						<h3>{horse.name}</h3>
						<Link to={`/horse-profile/${horse.index}`}>
						  <button index={horse.index} type= "submit" name={ horse.name } >{horse.name}</button>
						</Link>
						
					</div>
				))
			}
		</div>
	)
}

export default HorsesLibrary;





