class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = new Array(nums.length).fill(1)

        console.log(output)
        // [1,1,1,1]

        let left = 1
        for (let i = 0; i < output.length; i++) {
            output[i] = left
            left = output[i]*nums[i]
        }

        // [1,2,4,6]
        // [1,1,2,8]

        console.log(output)

        let right = 1 
        for (let i = output.length - 1; i > -1; i--) {
            output[i] = output[i]*right
            right = right*nums[i]
        }

        console.log(output)

        return output
    }
}
