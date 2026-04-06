class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({ length: 9 }, ()=> new Set())
        let cols = Array.from({ length: 9 }, ()=> new Set())
        let regions = Array.from({ length: 9}, ()=> new Set())

        console.log(board)

        for (let i = 0; i < rows.length; i++) {
            for (let j =0; j < cols.length; j++) {
                const val = board[i][j]

                if (val == '.') {
                    continue
                }

                // get the regionIndex
                // [0,0] => 1
                // [2,2] => 1
                // [3,3] => 5
                // [3,2] => 4

                // 8=>2
                // 7=>2
                // 6=>2
                // 6=>2

                // row = 0,1,2 // col = 0,1,2
                const regionIndex = Math.floor(j/3) + (Math.floor(i/3) * 3)

                // seen this number in the row?
                if (rows[i].has(val) || cols[j].has(val) || regions[regionIndex].has(val)) {
                    return false
                }

                rows[i].add(val)
                cols[j].add(val)
                regions[regionIndex].add(val)
            }
        }

        // we want to check that numbers are not repeated across 
        // rows, cols, regions
        // return false if any of them have a repeat
        // 

        return true
    }
}
