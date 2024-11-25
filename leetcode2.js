// 202. Happy Number
var isHappy = function (n) {
  let see = [];

  while (n !== 1 && !see.includes(n)) {
    see.push(n);

    let res = [];
    let nums = String(n);
    for (let num of nums) {
      let number = Number(num);
      res.push(Math.pow(number, 2));
    }
    n = res.reduce((sum, nums) => sum + nums, 0);
  }

  return n === 1;
};