import { EventEmitter } from 'events';
import { sortByProperty } from 'src/common/helpers';
import { QueueItem } from './interfaces';

export default class Queue {
  private keys: Set<string>;

  private emitter: EventEmitter;

  private items: QueueItem[];

  constructor(items: QueueItem[] = []) {
    this.items = items;
    this.keys = new Set(items.map((item) => item.key));
    this.emitter = new EventEmitter();

    this.emitter.on('add', () => this.sort());
  }

  sort(): void {
    sortByProperty(this.items)('value');
  }

  add(item: QueueItem): void {
    if (!this.keys.has(item.key)) {
      this.keys.add(item.key);
      this.items.push(item);
    } else {
      const index = this.items.findIndex((i) => i.key === item.key);

      this.items[index] = item;
    }

    this.emitter.emit('add', item);
  }

  next(): QueueItem {
    const item = this.items.shift();

    this.keys.delete(item.key);

    return item;
  }

  exists(key: string): boolean {
    return this.keys.has(key);
  }

  get(key: string): QueueItem {
    return this.items.find((item) => item.key === key);
  }

  hasItems(): boolean {
    return Boolean(this.length());
  }

  length(): number {
    return this.items.length;
  }
}
