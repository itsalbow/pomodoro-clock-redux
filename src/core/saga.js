import { actionChannel, call, take, put, race } from 'redux-saga/effects';
import * as actions from './actions';

const wait = (ms) => (
	new Promise(res => {
		setTimeout(() => res(), ms)
	})
);

function* tickTock() {
	const channel = yield actionChannel('START_CLOCK');

	// Start when START_CLOCK is called
	while(yield take(channel)) {
		while(true) {
			const winner = yield race({
				stopped: take('STOP_CLOCK'),
				tick: call(wait, 1000)
			});

			if (!winner.stopped) {
				yield put(actions.tick())
			} else {
				break;
			}// end if else
		}// end inner loop
	}// end outer loop
}// end generator function tickTock

export default tickTock;
