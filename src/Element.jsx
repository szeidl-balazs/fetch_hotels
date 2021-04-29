import React, { useState } from 'react';
import Subscription from './Subscription';

const Element = ( {element} ) => {

	const [show, setShow] = useState('show more');
	const [request, setRequest] = useState('Request more info');

	const showHandler = () => {
		show === 'show more' ? setShow('show less') : setShow('show more');
	}

	const requestHandler = () => {
		request === 'Request more info' ? setRequest('Request less info') : setRequest('Request more info')
	}


	return (
		<div className="element-container">			
			<h3>{element.name}</h3>			
			<button onClick={showHandler}>{show}</button>

			{
				show === 'show less'
				? 
				<div>
					<p>{element.stars}</p>
					<p>{element.city}</p>					
					<button onClick={requestHandler}>{request}</button>
				</div>
				: null
			}

			{
				request === 'Request less info' && show === 'show less' ?
				<Subscription />
				:
				null
			}
						
		</div>
	);


}

export default Element;