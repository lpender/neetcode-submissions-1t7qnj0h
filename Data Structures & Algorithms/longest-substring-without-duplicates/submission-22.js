class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let lastSeen = new Map()
        let left = 0
        let maxLength = 0

        for (let right = 0; right < s.length; right++) {
            let char = s[right]

            if (lastSeen.has(char) && lastSeen.get(char) >= left) {
                left = lastSeen.get(char) + 1
            }

            lastSeen.set(char, right)

            if (right-left+1 > maxLength) {
                maxLength = right-left+1
            }
        }

        return maxLength
    }
}
