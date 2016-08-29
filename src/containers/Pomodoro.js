import React from 'react';
import ControlMenu from './ControlMenu';
import Timer from './Timer';

const Pomodoro = (props) =>{
	const {
		addWork,
		minusWork,
		addBreak,
		minusBreak,
		workTime,
		breakTime,
		isTicking
	} = props;

	return(
		<div>
			<h1> Pomodoro Timer </h1>

			{/* Work Menu */}
			<ControlMenu
				add={addWork}
				minus={minusWork}
				title={'Work'}
				time={workTime}
				isTicking={isTicking}
				style={'work-menu'}/>

			{/* Break Menu */}
			<ControlMenu
				add={addBreak}
				minus={minusBreak}
				title={'Break'}
				time={breakTime}
				isTicking={isTicking}
				style={'break-menu'}/>

			<Timer {...props}/>
		</div>
	);
}

export default Pomodoro;
