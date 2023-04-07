import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

const helloCallback = (...args: any[]) => {
  console.log(`hello with ${JSON.stringify(args)} occurred`); // hello with ["world",1,2] occurred
};
ee.addListener('hello', helloCallback);
ee.on('hello', helloCallback);
ee.emit('hello', 'world', 1, 2);
ee.removeListener('hello', helloCallback);
ee.off('hello', helloCallback);
ee.emit('hello', 'finished'); // nothing happens
