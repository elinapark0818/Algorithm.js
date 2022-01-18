function partTimeJob(k) {
  let count = 0;
  let coin = [500, 100, 50, 10, 5, 1];

  for (let i = 0; i < coin.length; i++) {
    count += parseInt(k / coin[i]);
    k = k % coin[i];
  }
  return count;
}
