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
ee.emit('hello', 'finished');
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.on('event', (a, b) => {
//   setImmediate(() => {
//     console.log('this happens asynchronously');
//   });
// });
// myEmitter.emit('event', 'a', 'b');

// const ee = new EventEmitter();

// const helloCallback = (arg: string) =>
//   console.log('hello event called.' + ` argument is ${arg}`);
// ee.on('hello', helloCallback); // hello 이벤트 콜백 함수 등록
// ee.emit('hello', 'world'); // hello 이벤트 발생
// ee.off('hello', helloCallback); // hello 이벤트 등록 해지
// ee.emit('hello', 'world again'); // off가 호출되었으므로 더 이상 콜백 함수 호출 없음
