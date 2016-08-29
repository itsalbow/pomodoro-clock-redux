import React from 'react';

const ControlButton = ({operator, clickHandler, isTicking}) => (
	<button disabled={isTicking} onClick={clickHandler}>
		{operator}
	</button>
);

export default ControlButton;
