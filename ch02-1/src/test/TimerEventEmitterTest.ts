import { TimerEventEmitter } from './TimerEventEmitter';

const te = new TimerEventEmitter();
te.on('timer', () => console.log('timer event occurred'));
te.start();
