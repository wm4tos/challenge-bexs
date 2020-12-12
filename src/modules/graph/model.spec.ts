import Graph from './model';

describe('Graph', () => {
  let data = null;

  beforeEach(() => {
    data = null;

    data = {
      GRU: {
        BRC: 10, CDG: 75, SCL: 20, ORL: 56,
      },
      BRC: { SCL: 5 },
      ORL: { CDG: 5 },
      SCL: { ORL: 20 },
    };
  });

  it('should instantiate graph', () => {
    const graph = new Graph();

    expect(graph).toBeDefined();
    expect(graph).toBeInstanceOf(Graph);
  });

  it('should receive items in constructor', () => {
    const graph = new Graph({ GRU: data.GRU });

    expect(graph.graph.has('GRU')).toBeDefined();
    expect(graph.graph.size).toBe(1);
  });

  it('should add vertex', () => {
    const graph = new Graph();

    graph.addVertex('GRU', data.GRU);

    expect(graph.graph.has('GRU')).toBeDefined();
    expect(graph.graph.size).toBe(1);
  });

  it('should return the lowest price', () => {
    const graph = new Graph(data);

    expect(graph.go('GRU', 'CDG')).toBe(Graph.formatPath({ path: ['GRU', 'BRC', 'SCL', 'ORL', 'CDG'], cost: 40 }));
    expect(graph.go('BRC', 'CDG')).toBe(Graph.formatPath({ path: ['BRC', 'SCL', 'ORL', 'CDG'], cost: 30 }));
  });
});
