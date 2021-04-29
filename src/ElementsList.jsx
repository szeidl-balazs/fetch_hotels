import React, { useState, useEffect } from 'react';
import LoadingMask from './LoadingMask';
import Element from './Element';
//import FreeWordSearcher from './FreeWordSearcher';
import {v4 as uuidv4} from 'uuid';

const ElementsList = () => {

	const [serverData, setServerData] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
    fetch("/api/hotels")
      .then((res) => res.json())
      .then((result) => {

				setServerData(result);

				setTimeout(function () {
					setIsLoaded(true);
				}, 2000);				
			
      },									

      	(error) => {
        	console.log(error);
        	setIsLoaded(true);
      	}

      );
			
  }, []);
	console.log(serverData);


	return (
		<div className="elements-container">

		{
			!isLoaded ?
			<LoadingMask />
			:
			serverData.map(element => <Element key = {uuidv4()} element = {element}/>)
		}

		</div>
	);
}

export default ElementsList;