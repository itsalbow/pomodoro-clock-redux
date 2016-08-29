
export const tick = () => ({ type: 'TICK' });
export const addWork = () => ({ type: 'INCREMENT_WORK_TIME' });
export const minusWork = () => ({ type: 'DECCREMENT_WORK_TIME' });
export const addBreak = () => ({ type: 'INCREMENT_BREAK_TIME' });
export const minusBreak = () => ({ type: 'DECCREMENT_BREAK_TIME' });
export const startClock = () => ({ type: 'START_CLOCK' });
export const stopClock = () => ({ type: 'STOP_CLOCK' });
