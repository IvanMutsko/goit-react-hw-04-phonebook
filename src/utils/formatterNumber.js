export const formatterNumber = number => {
  const part1 = number.slice(0, 3);
  const part2 = number.slice(3, 5);
  const part3 = number.slice(5, 7);
  return `${part1}-${part2}-${part3}`;
};
