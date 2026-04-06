class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0
        let j = numbers.length-1

        while (i < j) {
            const sum = numbers[i] + numbers[j]

            console.log(i,j,sum)

            if (sum == target) {
                return [i+1, j+1]
            }

            if (sum > target) {
                j--
            }
            if (sum < target) {
                i++
            }
        }

        // numbers = [1,2,3,4,5,6]
        // target = 8

        // 


    }
}
