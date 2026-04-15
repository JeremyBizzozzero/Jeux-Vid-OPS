import {clamp, lerp, mapLinear, randFloatSpread} from '../../src/math.js';

// fournis par le sujet

describe('randFloatSpread', () => {
  test('randFloatSpread(1) <= 1 returns true', () => {
    expect(randFloatSpread(1) <= 1).toBe(true);
  });

  test('randFloatSpread(1) >= -1 returns true', () => {
    expect(randFloatSpread(1) >= -1).toBe(true);
  });
});

describe('mapLinear', () => {
  test('mapLinear(1,2,3,4,5) returns 3', () => {
    expect(mapLinear(1, 2, 3, 4, 5)).toBe(3);
  });

  test('mapLinear(1,20,3,40,5) returns 0.882352941176471', () => {
    expect(mapLinear(1, 20, 3, 40, 5)).toBeCloseTo(0.882352941176471);
  });
});

describe('lerp', () => {
  test('lerp(1,3,20) returns 41', () => {
    expect(lerp(1, 3, 20)).toBe(41);
  });

  test('lerp(1.3,-7,2) returns -15.3', () => {
    expect(lerp(1.3, -7, 2)).toBeCloseTo(-15.3);
  });
});

// tests supplementaires

describe('clamp', () => {
  test('clamp(5,0,10) returns 5 when value is within range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  test('clamp(15,0,10) returns 10 when value exceeds max', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  test('clamp(-5,0,10) returns 0 when value is below min', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });
});

describe('lerp additional', () => {
  test('lerp(0,100,0.5) returns 50 at midpoint', () => {
    expect(lerp(0, 100, 0.5)).toBe(50);
  });

  test('lerp(0,100,0) returns 0 at start', () => {
    expect(lerp(0, 100, 0)).toBe(0);
  });
});

describe('mapLinear additional', () => {
  test('mapLinear(5,0,10,0,100) returns 50', () => {
    expect(mapLinear(5, 0, 10, 0, 100)).toBe(50);
  });
});