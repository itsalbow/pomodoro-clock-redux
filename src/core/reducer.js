
const reducer = (state = [], action) => {
	const { timerStatus, seconds, breakTime, workTime } = state;

	const newStatus = (oldStatus) => (
		oldStatus === 'Work' ? 'Break' : 'Work'
	);

	const newTime = (oldStatus) => (
		oldStatus ==='Work' ? breakTime * 60 : seconds
	);

	switch(action.type){
		case 'TICK':
			return {
				...state,
				timerStatus: seconds === 1 ? newStatus(timerStatus) : timerStatus,
				seconds: seconds === 1 ? newTime(timerStatus) : seconds - 1
			};

		case 'START_CLOCK':
			return { ...state, isTicking: true };

		case 'STOP_CLOCK':
			return { ...state, isTicking: false };

		case 'INCREMENT_WORK_TIME':
			return {
				...state,
				workTime: workTime + 1,
				seconds: (workTime + 1) * 60
			};

		case 'DECCREMENT_WORK_TIME':
			return {
				...state,
				workTime: workTime > 1 ? workTime - 1 : workTime,
				seconds: workTime > 1 ? (workTime - 1) * 60 : seconds
			};

		case 'INCREMENT_BREAK_TIME':
			return {
				...state,
				breakTime: breakTime + 1
			};

		case 'DECCREMENT_BREAK_TIME':
			return {
				...state,
				breakTime: breakTime > 1 ? breakTime - 1 : breakTime
			};

		default:
			return state;
	}
}

export default reducer;
