class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s2.length < s1.length) { 
            return false
        }

        let count = new Array(26).fill(0)
        let count2 = new Array(26).fill(0)

        for (let i = 0; i < s1.length; i++) {
            console.log(`s1[i]: ${s1[i]}`)
            let countIdx = s1[i].charCodeAt(0) - 'a'.charCodeAt(0)
            console.log(`countIdx = s1[i].charCodeAt(0) - 'a'.charCodeAt(0): ${countIdx = s1[i].charCodeAt(0) - 'a'.charCodeAt(0)}`)
            count[countIdx]++
            console.log(`count[countIdx]++: ${count[countIdx]}`)
        }

        console.log(count)


        for (let right = 0; right < s1.length; right++) {
            count2[s2[right].charCodeAt(0) - 'a'.charCodeAt(0)]++
            console.log(`added s2[right]: to count2`)
            console.log(s2[right], count2)
        }

        // now right is s1.length

        function isMatch(count, count2) {
            console.log("comparing counts:")
            console.log(count,count2)
            for (let i = 0; i < 26; i++) {
                console.log(`i: ${i}`)
                console.log(`count[i]: ${count[i]}`)
                console.log(`count2[i]: ${count2[i]}`)
                if (count[i] !== count2[i]) {
                    console.log('not equal')
                    return false
                }
            }

            console.log('equal!!')
            return true
        }

        let left = 0
        for (let right = s1.length; right < s2.length; right++) {
            if (isMatch(count,count2)) {
                return true
            }

            count2[s2[right].charCodeAt(0) - 'a'.charCodeAt(0)]++
            console.log(`added s2[right]: to count2`)
            console.log(s2[right], count2)


            count2[s2[left].charCodeAt(0) - 'a'.charCodeAt(0)]--
            console.log(`removed s2[left]: from count2`)
            console.log(s2[left], count2)

            left++
        }

                    if (isMatch(count,count2)) {
                return true
            }

        return false
    }
}

/*
["ab"]
["lecabee"]




*/
