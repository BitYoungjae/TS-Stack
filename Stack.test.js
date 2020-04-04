const { Stack } = require('./build/Stack');

describe('Core Tests', () => {
  it('Push/Pop Test', () => {
    const stack = new Stack(10);
    stack.push(5);
    stack.push(4);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.size).toBe(2);
  });

  it('Stack Overflow Test', () => {
    const stack = new Stack(2);
    stack.push(5);
    stack.push(4);

    expect(() => stack.push(3)).toThrow();
  });

  it('New Stack with 0 size', () => {
    expect(() => {
      const stack = new Stack(0);
    }).toThrow();
  });
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
