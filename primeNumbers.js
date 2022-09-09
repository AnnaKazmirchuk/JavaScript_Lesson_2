function primeNumbers(n) {

    const list = [];
    
    for (let i = 2; i <= n; i++) {
        let flag = false;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                flag = true;
                break;
            }
        }
        if (flag === false) {
            list.push(i)
        };

    }
    return list;
}


console.log(primeNumbers(process.argv[2]));