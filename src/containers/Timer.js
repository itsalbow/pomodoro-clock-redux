// Timer
import React from 'react';
import StartStopButton from '../components/StartStopButton';

const Timer = (props) => {
	const { startClock, stopClock, tomatoTime, isTicking, timerStatus } = props;

	return(
		<div className='timer'>
  			<h2>{`Timer: ( ${timerStatus} )`}</h2>
			<StartStopButton
				startClock={startClock}
				stopClock={stopClock}
				isTicking={isTicking}
			/>
			<h3>{tomatoTime}</h3>
		</div>
	);
};

export default Timer;
