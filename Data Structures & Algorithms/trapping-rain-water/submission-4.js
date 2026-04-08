class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0
        let right = height.length - 1
        let water = 0
        let leftMax = 0
        let rightMax = 0

        while (left < right) {
            let leftHeight = height[left]
            let rightHeight = height[right]

            if (leftHeight < rightHeight) {
                if (leftHeight >= leftMax) {
                    leftMax = leftHeight
                } else {
                    water += leftMax - leftHeight
                }
                left++
            }
            if (leftHeight >= rightHeight) {
                if (rightHeight > rightMax) {
                    rightMax = rightHeight
                } else {
                    water += rightMax - rightHeight
                }
                right--
            }
        }

        return water
    }
}
