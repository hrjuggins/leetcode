const twoSum = (nums, target) => {
    let res = [];
    nums.map((x, i) => {
        temp = target - x
        nums.map((y, j) => {
            (j !== i && y === temp) ? res.push(i) : null
        })
    })
    return res
};
