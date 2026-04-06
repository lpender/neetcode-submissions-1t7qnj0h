class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let string = s.replace(/[^\w]/g, '').toLowerCase()

        console.log(string)

        let i = 0
        let j = string.length-1

        while (i < j) {
            console.log(`i: ${i}`)
            console.log(`j: ${j}`)
            console.log(`s[i]: ${string[i]}`)
            console.log(`s[j]: ${string[j]}`)
            if (string[i] !== string[j]) {
                return false
            }

            i++
            j--
        }

        return true
    }
}
