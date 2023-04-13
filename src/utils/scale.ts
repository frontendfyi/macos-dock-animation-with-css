export const scaleValue = (
  value: number,
  from: [number, number],
  to: [number, number]
) => {
  const scale = (to[1] - to[0]) / (from[1] - from[0]);
  const capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
  return Math.floor(capped * scale + to[0]);
};
