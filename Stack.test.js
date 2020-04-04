const { Stack } = require('./build/Stack');

test('Push/Pop Test', () => {
  const stack = new Stack(10);
  stack.push(5);
  stack.push(4);
  stack.push(3);

  const lastOne = stack.pop();
  const { size } = stack;

  expect(lastOne).toBe(3);
  expect(size).toBe(2);
});

test('Stack Overflow Test', () => {
  const stack = new Stack(2);
  stack.push(5);
  stack.push(4);

  expect(() => stack.push(3)).toThrow();
});

test('New Stack with 0 size', () => {
  expect(() => {
    const stack = new Stack(0);
  }).toThrow();
});

describe('New Features', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack(3);
    stack.push(1);
    stack.push(2);
    stack.push(3);
  });

  it('isEmpty', () => {
    expect(stack.isEmpty).toBe(false);

    const emptyStack = new Stack(3);
    expect(emptyStack.isEmpty).toBe(true);
  });

  it('clear', () => {
    stack.clear();
    expect(stack.isEmpty).toBe(true);

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it('top', () => {
    expect(stack.top).toBe(3);

    stack.clear();
    expect(stack.top).toBe(-1);
  });
});
