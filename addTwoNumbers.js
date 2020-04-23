const addTwoNumbers = (l1, l2) => {
    let newL1 = parseInt(l1.reverse().reduce((l1, x) => l1+=x.toString()))
    let newL2 = parseInt(l2.reverse().reduce((l2, x) => l2+=x.toString()))
    return newL1 + newL2
};
