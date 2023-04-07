import { EventEmitter } from 'node:events';

export class TimerEventEmitter extends EventEmitter {
  start(timeout: number = 1000) {
    const id = setTimeout(() => {
      this.emit('timer');
      clearTimeout(id);
    }, timeout);
  }
}
const tee = new TimerEventEmitter();
