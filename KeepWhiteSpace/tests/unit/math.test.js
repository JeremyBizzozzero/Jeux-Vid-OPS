import {Vec} from '../../src/vec.js';
import {getTimeStr} from '../../src/time.js';

// --- Vec ---

// fournis par le sujet

describe('Vec constructor', () => {
  test('new Vec(1, 2) returns {x: 1, y: 2}', () => {
    expect(new Vec(1, 2)).toEqual({x: 1, y: 2});
  });
});

describe('Vec add', () => {
  test('new Vec(1, 2).add(new Vec(3, 4)) returns {x: 4, y: 6}', () => {
    expect(new Vec(1, 2).add(new Vec(3, 4))).toEqual({x: 4, y: 6});
  });
});

describe('Vec mul', () => {
  test('new Vec(1, 2).mul(-2, 3) returns {x: -2, y: 6}', () => {
    expect(new Vec(1, 2).mul(-2, 3)).toEqual({x: -2, y: 6});
  });
});

describe('Vec dot', () => {
  test('new Vec(1, 2).dot(new Vec(2, 1)) returns 4', () => {
    expect(new Vec(1, 2).dot(new Vec(2, 1))).toBe(4);
  });
});

describe('Vec cross', () => {
  test('new Vec(1, 2).cross(new Vec(3, 4).mul(-2, 3)) returns 24', () => {
    expect(new Vec(1, 2).cross(new Vec(3, 4).mul(-2, 3))).toBe(24);
  });

  test('chained dot/add/cross returns 57', () => {
    const result = new Vec(1, 2).dot(
        new Vec(1, 2).add(
            new Vec(
                new Vec(1, 2).dot(new Vec(2, 1)),
                new Vec(1, 2).cross(new Vec(3, 4).mul(-2, 3)),
            ),
        ),
    );
    expect(result).toBe(57);
  });

  test('new Vec(1, 2).add(3) returns {x: NaN, y: NaN}', () => {
    const result = new Vec(1, 2).add(3);
    expect(result.x).toBeNaN();
    expect(result.y).toBeNaN();
  });

  test('new Vec(1, 1).cross(new Vec(-42, -42)) returns 0', () => {
    expect(new Vec(1, 1).cross(new Vec(-42, -42))).toBe(0);
  });
});

// tests supplementaires

describe('Vec supplementaires', () => {
  test('new Vec(3, 4).mul(2) returns {x: 6, y: 8}', () => {
    expect(new Vec(3, 4).mul(2)).toEqual({x: 6, y: 8});
  });

  test('a.dot(b) equals b.dot(a)', () => {
    const a = new Vec(3, 7);
    const b = new Vec(5, 2);
    expect(a.dot(b)).toBe(b.dot(a));
  });
});

// --- getTimeStr ---

// fournis par le sujet

describe('getTimeStr', () => {
  test('getTimeStr(424242) returns "7:04.24"', () => {
    expect(getTimeStr(424242)).toBe('7:04.24');
  });

  test('getTimeStr(-123456) returns "-3:-4.-4"', () => {
    expect(getTimeStr(-123456)).toBe('-3:-4.-4');
  });
});

// tests supplementaires

describe('getTimeStr supplementaires', () => {
  test('getTimeStr(0) returns "0:00.00"', () => {
    expect(getTimeStr(0)).toBe('0:00.00');
  });

  test('getTimeStr(60000) returns "1:00.00"', () => {
    expect(getTimeStr(60000)).toBe('1:00.00');
  });

  test('getTimeStr(1500) returns "0:01.50"', () => {
    expect(getTimeStr(1500)).toBe('0:01.50');
  });
});
