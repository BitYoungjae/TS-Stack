# TS-Stack

타입스크립트와 TypedArray로 구현한 스택

## 목적

테스트 코드 작성과 타입스크립트 연습을 위한 일종의 연습장이다.
테스트코드가 길어져서 저장소 분류가 자바스크립트 저장소로 분류되지만,
분명 타입스크립트 저장소이다..

## Interface

```typescript
export declare class Stack {
  private data;
  private internalSize;
  constructor(size: number);
  get size(): number;
  push(value: number): void;
  pop(): number;
  clear(): void;
  get top(): number;
  get isEmpty(): boolean;
}
```

## Demo

```js
const { Stack } = require('./build/Stack');
const stack = new Stack(10);

stack.push(5);
stack.push(4);
stack.push(3);

console.log(stack.pop()); // 3
console.log(stack.pop()); // 4
console.log(stack.pop()); // 5
```

## Scripts

```bash
npm run start:build
npm run start:test
npm start
```
