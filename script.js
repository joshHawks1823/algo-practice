// Two Number Sum 

/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

 You may assume that each input would have exactly one solution, and you may not use the same element twice. */



// function twoSum(nums, target) {

// 	const comp = new Map();
// 	const len = nums.length;

// 	for (let i = 0; i < len; i++) {
// 		if(comp[nums[i]] >= 0) {
// 			return [comp[nums[i]], i]
// 		}
// 		comp[target - nums[i]] = i;
// 	}
// 	return [];
// 	}

// const nums = [2, 7, 11, 15];

// console.log(twoSum(nums, 9))

function isValidSubsequence(array, sequence) {
  let idx = 0;
  for (let i=0; i < array.length; i++) {
    if (idx === sequence.length) {
      break;
    }
    if (array[i] === sequence[idx] && idx < sequence.length) {
      idx++;
    }
  }
    return idx === sequence.length;
}

console.log(isValidSubsequence([1,2,3,4],[1,3,4]))