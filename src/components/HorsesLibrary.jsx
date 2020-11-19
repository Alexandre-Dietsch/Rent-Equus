import React from "react";
import data from "../data/horses.json";
import { Link } from "react-router-dom";


function HorsesLibrary() {
  return (
		<div>
			{
				data.map(horse => (
					<div> 
						<img scr= {horse.image} alt={ horse.name } />
						<h3>{horse.name}</h3>
						<Link to="/horse-profile">
						  <button type= "submit" name={ horse.name } >trololololololol</button>
						</Link>
						
					</div>
				))
			}
		</div>
	)
}

export default HorsesLibrary;





