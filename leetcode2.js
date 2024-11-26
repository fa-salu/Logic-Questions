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

//  75. Sort Colors

var sortColors = function (nums) {
  let count = 0,
    count1 = 0,
    count2 = 0;
  for (let num of nums) {
    if (num === 0) count++;
    else if (num === 1) count1++;
    else if (num === 2) count2++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (count > 0) {
      nums[i] = 0;
      count--;
    } else if (count1 > 0) {
      nums[i] = 1;
      count1--;
    } else {
      nums[i] = 2;
      count2--;
    }
  }

  return nums

};
console.log(sortColors([2,0,1])); // [0,0,1,1,2,2]
