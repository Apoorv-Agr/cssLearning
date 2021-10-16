/* 
Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

Note:

All numbers (including target) will be positive integers.
Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).
The combinations themselves must be sorted in ascending order.
CombinationA > CombinationB iff (a1 > b1) OR (a1 = b1 AND a2 > b2) OR … (a1 = b1 AND a2 = b2 AND … ai = bi AND ai+1 > bi+1)
The solution set must not contain duplicate combinations.
Example, 

Given candidate set 2,3,6,7 and target 7,

A solution set is:

[2, 2, 3]
[7]
 */

module.exports = {
    //param A : array of integers
    //param B : integer
    //return a array of array of integers
    combinationSum: function (A, B) {
        let ans = []
        if (A === null || A.length === 0)
            return ans;
        A.sort((a, b) => a - b);
        const uniqA = [...new Set(A)];
        let current = [];
        this.findNumbers(uniqA, B, 0, current, ans);
       
        return ans;
    },
    findNumbers: function (A, B, idx, current, ans) {
        if (B == 0) {
            const temp = current.slice();
            ans.push(temp);
            return;
        }
        for (let j = idx; j < A.length; j++) {
            if (B < A[j]) {
                return;
            }
            current.push(A[j]);
            this.findNumbers(A, B - A[j], j, current, ans);
            current.pop();
        }
    }
};
