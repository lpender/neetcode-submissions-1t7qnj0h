class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        console.log(heights)
        let maxArea = 0
        let l = 0
        let r = heights.length - 1

        while (l<r) {
            console.log(`l: ${l}`)
            console.log(`r: ${r}`)

            let leftCol = heights[l]
            let rightCol = heights[r]

            console.log(`leftCol: ${leftCol}`)
            console.log(`rightCol: ${rightCol}`)

            let height = Math.min(leftCol,rightCol)
            console.log(`height: ${height}`)

            let width = r-l
            console.log(`width: ${width}`)

            let area = height * width
            console.log(`area: ${area}`)

            if (area > maxArea) {
                console.log(`replacing maxArea ${maxArea} with ${area}`)
                maxArea = area
            }

            if (leftCol > rightCol) {
                r--
            } else {
                l++
            }
        }

        return maxArea

    }
}
