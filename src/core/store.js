import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);

const defaultState = {
	isTicking: false,
	workTime: 25,
	breakTime: 15,
	seconds: 1500,
	timerStatus: 'Work'
};

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStoreWithMiddleware(reducer, defaultState, enhancers);

sagaMiddleware.run(saga);

export default store;
