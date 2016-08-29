import { duration } from 'moment';
import { compose, multiply, not, prop } from 'ramda';


//------------------
// Format time
//------------------
export const getFormattedTime = (state) => formatTime(state.seconds * 1000);

/**
 * Padding function
 * @param  {number} t is either a minutes or seconds value
 * @return {string}   of formatted time. example, 1 => 01
 */
const pad = (t) => t < 10 ? `0${t}` : `${t}`;


/**
 * Run Pad function on both minutes and seconds
 * @param  {number} m = moment. Either minute or seconds
 * @return {string}   A string of formatted time.
 * NOTE: 60 => 01:00
 */
const formatMoment = (m) => `${pad(m.minutes())}:${pad(m.seconds())}`;
const formatTime = compose(formatMoment, duration);
// end of Format time block
