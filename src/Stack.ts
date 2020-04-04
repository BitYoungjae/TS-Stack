export class Stack {
  private data: Int32Array;
  private internalSize: number = 0;

  constructor(size: number) {
    if (size < 1) throw Error('Size must be greater than 0');
    this.data = new Int32Array(size);
  }

  public get size(): number {
    return this.internalSize;
  }

  public push(value: number) {
    const pointer = this.internalSize;

    if (pointer >= this.data.length)
      throw new Error(
        `Stack Overflow : Maximum Stack Length is ${this.data.length}`,
      );

    this.data[pointer] = value;
    this.internalSize = pointer + 1;
  }

  public pop(): number {
    if (!this.internalSize) return -1;

    const pointer = this.internalSize - 1;
    const value = this.data[pointer];
    this.internalSize = pointer;

    return value;
  }
}
