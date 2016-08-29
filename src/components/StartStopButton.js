import React from 'react';

const StartStopButton = ({ isTicking, startClock, stopClock }) => {

	const clickHandler = () => {
		if(!isTicking) startClock();
		else stopClock();
	}

	return(
		<button onClick={clickHandler}>
			{!isTicking ? 'Start' : 'Stop'}
		</button>
	);
};

export default StartStopButton;
