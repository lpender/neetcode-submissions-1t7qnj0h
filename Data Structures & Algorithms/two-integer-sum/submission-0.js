class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // integer is the key, index is the value
        let indices = new Map()

        console.log(`target: ${target}`)

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];

            let diff = target - num

            console.log(`num: ${num}`)
            console.log(`diff: ${diff}`)
            console.log(`indices:`)
            console.log(indices)
            console.log(`indices.has(${diff}): ${indices.has(diff)}`)

            if (indices.has(diff)) {
                console.log(indices.get(diff))
                return [i, indices.get(diff)]
            } else {
                indices.set(num, i)
                console.log(`added diff`)
                console.log(`indices:`)
                console.log(indices)
            }
        }
    }
}
