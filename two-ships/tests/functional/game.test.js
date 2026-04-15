import {clamp, lerp, mapLinear} from '../../src/math.js';
import {flow} from '../../src/utils.js';

describe('movement simulation', () => {
  test('vaisseau reste dans les limites apres deplacement', () => {
    const current = 10;
    const target = 200;
    const speed = 0.5;
    const screenMax = 100;

    const newPosition = clamp(
        lerp(current, target, speed), 0, screenMax);

    expect(newPosition).toBe(100);
  });
});

describe('health bar rendering', () => {
  test('HP negatifs affichent une barre a 0 pourcent', () => {
    const hp = -20;
    const maxHp = 100;

    const displayPercent = mapLinear(
        clamp(hp, 0, maxHp), 0, maxHp, 0, 100);

    expect(displayPercent).toBe(0);
  });
});

describe('coordinate pipeline', () => {
  test('coordonnee monde convertie en coordonnee ecran', () => {
    const worldToScreen = flow(
        (x) => lerp(x, 100, 0.5),
        (x) => clamp(x, 0, 60),
        (x) => mapLinear(x, 0, 60, 0, 1),
    );

    const result = worldToScreen(20);
    expect(result).toBeCloseTo(1);
  });
});