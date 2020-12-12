import Queue from '../queue';
import { objectToMap } from './helpers';
import { Path } from './interfaces';

export default class Graph {
  graph: Map<string, Map<string, unknown>>;

  constructor(graph?: unknown) {
    this.graph = graph ? objectToMap(graph) : new Map();
  }

  addVertex(key: string, obj: unknown): this {
    this.graph.set(key, objectToMap(obj));

    return this;
  }

  go(from: string, to: string): string {
    if (!this.graph.size) return Graph.formatPath({ path: null, cost: 0 });

    const passed = new Set();
    const queue = new Queue();
    const last = new Map();

    const path = [];
    let totalCost = 0;

    queue.add({ key: from, value: 0 });

    while (queue.hasItems()) {
      const actual = queue.next();

      if (actual.key === to) {
        totalCost = actual.value;

        let actualKey = actual.key;
        while (last.has(actualKey)) {
          path.push(actualKey);
          actualKey = last.get(actualKey);
        }

        break;
      }

      passed.add(actual.key);

      const near = this.graph.get(actual.key) || new Map();

      near.forEach((value, key) => {
        if (passed.has(key)) return null;

        last.set(key, actual.key);

        const actualCost = actual.value + value;

        if (!queue.exists(key) || actualCost < queue.get(key).value) {
          return queue.add({ key, value: actualCost });
        }

        return null;
      });
    }

    if (!path.length) return Graph.formatPath({ path: null, cost: 0 });

    return Graph.formatPath({
      path: path.concat(from).reverse(),
      cost: totalCost,
    });
  }

  static formatPath({ path, cost }: Path): string {
    return path ? path.join(' - ').concat(' -> $', cost.toString()) : '';
  }
}
