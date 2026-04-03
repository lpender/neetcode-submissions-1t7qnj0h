class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((str)=> {
            const length = str.length
            return `${str.length}:${str}`
        }).join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = []
        let i = 0

        while (i < str.length) {
            let colonIndex = str.indexOf(":", i)
            let length = parseInt(str.substring(i, colonIndex))
            result.push(str.slice(colonIndex+1, colonIndex+length+1))
            i = colonIndex+length+1
        }

        return result
    }
}
