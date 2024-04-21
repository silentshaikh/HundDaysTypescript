const funcCallb = (
  a: number,
  b: number,
  calbck: (sum: number) => void
) => {
  let sum: number = a + 5;
  calbck(sum);
};
funcCallb(2, 3, (sum: number): void => {
  funcCallb(sum, 5, (sum2) => {
    console.log(sum2);
  });
});
