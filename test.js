const obj =
    {
        nameHasError : {
            empty : false,
            wordExceed : false
        },
        emailHasError : {
            empty : false,
            invalidEmail : false
        },
        subjectHasError : false,
        messageHasError : false,
    };

const hasError = (obj) => {
    if(typeof obj !== 'object') return obj;

    for(const key in obj)
        if(hasError(obj[key])) return true;
        
    return false;
}

console.log(hasError(obj));