import React from 'react';
import ControlButton from '../components/ControlButton';

const ControlMenu = (props) => {
	const { add, minus, title, time, isTicking, style } = props;

	return (
		<div className={style}>
			<h2>{title}</h2>

			{/* Minus button */}
			<ControlButton
				operator={'-'}
				clickHandler={minus}
				isTicking={isTicking}/>

			{/* Time */}
			<span>{time}</span>

			{/* Plus button */}
			<ControlButton
				operator={'+'}
				clickHandler={add}
				isTicking={isTicking}/>

		</div>
	);
};

export default ControlMenu;
