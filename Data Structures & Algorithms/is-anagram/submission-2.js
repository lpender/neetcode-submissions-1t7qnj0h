class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // equal if they have all the same chars
        // equal if the difference between their charsets is 0 (sets are equal)
        // send chars to a set, check if the sets are equal
        console.log(s)
        console.log(t)
        const chars = new Map()

        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            let count = chars.get(char)

            if (count && count > 0) {
                chars.set(char, count + 1)
            } else {
                chars.set(char, 1)
            }
        }

        for (let i = 0; i < t.length; i++) {
            let char = t[i]
            let count = chars.get(char)

            if (count && count == 1) {
                chars.delete(char)
            } else if (count && count > 1) {
                chars.set(char, count - 1)
            } else {
                return false
            }
        }
 
        if (chars.size > 0 ) {
            return false
        }
        
        return true
    }
}
