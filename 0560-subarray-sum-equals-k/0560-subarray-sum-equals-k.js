/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let [curSum, numOfSubarr] = [0, 0];
  let map = new Map();
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];

    if (map.has(curSum - k)) numOfSubarr += map.get(curSum - k);
    map.set(curSum, 1 + (map.get(curSum) || 0));
  }
  return numOfSubarr;
};