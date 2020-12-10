import { sortByProperty } from 'src/common/helpers';
import { QueueItem } from './interfaces';
import Queue from '.';

describe('Queue', () => {
  const items: QueueItem[] = [];
  let sorter;

  beforeEach(() => {
    sorter = null;
    while (items.length) {
      items.shift();
    }

    items.push(
      { key: 'foo', value: 100 },
      { key: 'bar', value: 10 },
    );

    sorter = sortByProperty(items);
  });

  it('should instantiate a queue', () => {
    const queue = new Queue();

    expect(queue).toBeDefined();
    expect(queue).toBeInstanceOf(Queue);
  });

  it('should receive items from constructor', () => {
    const queue = new Queue(items);
    const expected = 2;

    expect(queue.length()).toBe(expected);
  });

  it('should add items on queue', () => {
    const queue = new Queue();
    const expected = 2;

    items.forEach((item) => queue.add(item));

    expect(queue.length()).toBe(expected);
  });

  it('should return items on correct order', () => {
    const queue = new Queue(items);

    sorter('value');

    items.forEach((item) => {
      expect(queue.next()).toStrictEqual(item);
    });
  });

  it('should show that the item does exists', () => {
    const queue = new Queue(items);
    const expected = true;

    items.forEach((item) => {
      expect(queue.exists(item.key)).toBe(expected);
    });
  });

  it('should show that the item does not exists', () => {
    const queue = new Queue(items);
    const expected = false;

    expect(queue.exists('key')).toBe(expected);
  });

  it('should return correct item', () => {
    const queue = new Queue(items);

    items.forEach((item) => {
      expect(queue.get(item.key)).toStrictEqual(item);
    });
  });

  it('should show that there are items', () => {
    const queue = new Queue(items);
    const expected = true;

    expect(queue.hasItems()).toBe(expected);
  });

  it('should show that there are not items', () => {
    const queue = new Queue();
    const expected = false;

    expect(queue.hasItems()).toBe(expected);
  });
});
