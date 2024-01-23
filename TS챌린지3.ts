class GenericQueue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
      this.items.push(item);
  }

  dequeue(): T | undefined {
      if (this.size() === 0) {
          return undefined;
      }
      return this.items.shift();
  }

  peek(): T | undefined {
      if (this.size() === 0) {
          return undefined;
      }
      return this.items[0];
  }

  size(): number {
      return this.items.length;
  }
}
