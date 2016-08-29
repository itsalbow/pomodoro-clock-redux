import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getFormattedTime } from './selectors';

import * as actions from './actions';
import Pomodoro from '.././containers/Pomodoro';

const mapStateToProps = (state) => ({
	isTicking: state.isTicking,
	workTime: state.workTime,
	breakTime: state.breakTime,
	seconds: state.seconds,
	tomatoTime: getFormattedTime(state),
	timerStatus: state.timerStatus
});

const mapDispatchToProps = (dispatch) => (
	bindActionCreators(actions, dispatch)
);

const App = connect(mapStateToProps, mapDispatchToProps)(Pomodoro);

export default App;
