class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // k == 5
    // 10 Fs
    // 8 As
    characterReplacement(s, k) {
        // sliding window
        // move left if the # of replacements exceeds k
        // find the most frequent character and 

        let count = new Array(26).fill(0)
        let maxFreq = 0
        let maxLen = 0
        let left = 0

        console.log(count)

        for (let right = 0; right < s.length; right ++) {
            // the index (in our alpha array) for char at right
            let rightIdx = s[right].charCodeAt(0) - 'A'.charCodeAt(0)
            console.log(`rightIdx: ${rightIdx}`)
            // increase that charfrequency
            console.log(`increasing ${s[right]}`)
            const freq = count[rightIdx] = count[rightIdx] + 1
            console.log(`new count: ${count}`)

            maxFreq = Math.max(freq, maxFreq)

            while (right - left + 1 - maxFreq > k) {
                count[s[left].charCodeAt(0) - 'A'.charCodeAt(0)]--
                left++
            }
            
            maxLen = Math.max(right - left + 1, maxLen)
        }

        return maxLen
    }
}

/*

"XYYK", k=2

output = 4

"AAABABB", k=1
         
output = 5

// left and right pointers
// move the right pointer over
// see what the most frequent character is
// subtract that frequency of that char from the total length of the substring to see how many holes remain
// 


*/
