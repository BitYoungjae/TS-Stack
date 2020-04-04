# TS-Stack

타입스크립트와 TypedArray로 구현한 스택

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

## API

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
