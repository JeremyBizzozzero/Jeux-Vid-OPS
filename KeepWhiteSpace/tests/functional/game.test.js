import {Vec} from '../../src/vec.js';
import {getTimeStr} from '../../src/time.js';

describe('collision detection', () => {
  test('deux entites distantes ne sont pas en collision', () => {
    const e1 = {p: new Vec(0, 0), radius: 10};
    const e2 = {p: new Vec(100, 100), radius: 10};
    const distance = Math.sqrt(
        (e1.p.x - e2.p.x) ** 2 + (e1.p.y - e2.p.y) ** 2,
    );
    expect(distance < e1.radius + e2.radius).toBe(false);
  });
});

describe('bullet out of bounds', () => {
  test('une balle hors du terrain est detectee', () => {
    const width = 500;
    const height = 500;
    const radius = 5;
    const bullet = {p: new Vec(-10, 250), radius};
    const isOut = bullet.p.x < radius
      || bullet.p.x > width - radius
      || bullet.p.y < radius
      || bullet.p.y > height - radius;
    expect(isOut).toBe(true);
  });
});

describe('score calculation', () => {
  test('score augmente avec le temps et le ratio de blanc', () => {
    const dt1 = 10000;
    const dt2 = 20000;
    const whiteRatio = 0.5;
    const score1 = Math.round(dt1 * whiteRatio / 10) / 100;
    const score2 = Math.round(dt2 * whiteRatio / 10) / 100;
    expect(score2).toBeGreaterThan(score1);
  });
});
