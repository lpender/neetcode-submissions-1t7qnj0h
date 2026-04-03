class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = new Array(nums.length).fill(0)

        console.log(output)

        // simple case:
        // nums [1,2,3]
        // output[0] = 2*3
        // output[1] = 1*3
        // output[2] = 1*2

        // special cases: 0
        // [0,1,2]
        // output[0] = 1*2
        // output[1] = 0*2
        // output[2] = 0*1

        // get the product of all nums
        // for each num, map output to product divided by that num

        // if there's more than one 0, it's all 0s
        // if there's one 0, that's the only one we need to calculate
        // if there's no zeroes, we can use division

        // check if it has a 0
        let firstZeroIndex = nums.indexOf(0)
        let lastZeroIndex = nums.lastIndexOf(0)

        if (firstZeroIndex > -1) {
            // does it have more than one 0?
            if (firstZeroIndex !== lastZeroIndex) {
                // return output with all 0s
                return output
            } else {
                const newNums = nums
                newNums.splice(firstZeroIndex,1)
                let product = newNums.reduce((product,num)=> {
                    return product*num
                },1)
                
                output[firstZeroIndex] = product
                return output
            }
        }

        // otherwise compute product then divide each element

        let product = nums.reduce((product, num)=> {
            console.log(product)
            console.log(num)
            return product*num
        }, 1)

        console.log(product)

        output = nums.map((num)=> {
            return product / num
        })

        return output
    }
}
