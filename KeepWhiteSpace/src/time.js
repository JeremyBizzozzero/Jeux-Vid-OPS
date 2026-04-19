export function getTimeStr(dt) {
  const timeMs = `${Math.floor((dt % 1000) / 10)}0`.slice(0, 2);
  const timeS = `0${Math.floor(dt / 1000) % 60}`.slice(-2);
  const timeM = Math.floor(dt / 1000 / 60);
  return `${timeM}:${timeS}.${timeMs}`;
}
