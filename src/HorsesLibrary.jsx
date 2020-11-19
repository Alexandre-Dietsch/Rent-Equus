import React from "react";
import data from "./data/horses.json";


function HorsesLibrary() {
  return (
		<div>
			{
				data.map(horse => (
					<div> 
						<img scr= {horse.image} alt={ horse.name } />
						<h3>{horse.name}</h3>
						<button type= "submit" name={ horse.name } >trololololololol</button>
					</div>
				))
			}
		</div>
	)
}

export default HorsesLibrary;





