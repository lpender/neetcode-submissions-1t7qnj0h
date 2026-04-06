class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        console.log(nums)

        let numSet = new Set(nums)

        console.log(numSet)

        let maxLength = 0

        for (let num of numSet) {
            if (numSet.has(num-1)) {
                continue
            }

            let currentLength = 1
            let i = 1

            while (numSet.has(num+i)) {
                currentLength++
                i++
            }
            
            console.log(currentLength)

            if (currentLength > maxLength) {
                maxLength = currentLength
            }
        }

        return maxLength
    }
}
