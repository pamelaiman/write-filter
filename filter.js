function ourFilter(inputArray, predicateFn){
    const resultArray = [];
    for (let char of inputArray){
        if (predicateFn(char)) {
            resultArray.push(char)
        }
    }
    return resultArray;
}

export { ourFilter };