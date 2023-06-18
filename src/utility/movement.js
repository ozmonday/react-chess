export const posiblePositionKnight = (current, target) => {
  const [row, col] = current;
  let result = false;
  let posible = [
    [row - 1, col - 2],
    [row + 1, col - 2],
    [row - 1, col + 2],
    [row + 1, col + 2],
    [row - 2, col - 1],
    [row - 2, col + 1],
    [row + 2, col - 1],
    [row + 2, col + 1],
  ];

  posible = posible.filter(
    (v) => v[0] >= 0 && v[0] <= 7 && v[1] >= 0 && v[1] <= 7
  );

  posible.forEach((v) => {
    if (v[0] === target[0] && v[1] === target[1]) {
      result = true
    }
  })

  return result
};
