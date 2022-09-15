import { useState } from "react";

const useValidation = () => {

    const [errorInfo, setErrorInfo] = useState(
        {
            name : {
                empty : false,
                wordExceed : false
            },
            email : {
                empty : false,
                invalidEmail : false
            },
            subjectIsEmpty : false,
            messageIsEmpty : false,
        }
    );

    const recursiveCheck = (obj) => {
        if(typeof obj !== 'object') return obj;
    
        for(const key in obj)
            if(recursiveCheck(obj[key])) return true;
            
        return false;
    }

    const hasError = (name, email, subject, message) => {
        const obj = {...errorInfo, name : {...errorInfo.name}, email : {...errorInfo.email}};

        obj.name.empty = name.length === 0;
        obj.name.wordExceed = name.length >= 70;
        obj.email.empty = email.length === 0;
        obj.email.invalidEmail = !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) && true;
        obj.subjectIsEmpty = subject.length === 0;
        obj.messageIsEmpty = message.length === 0;

        setErrorInfo(obj);
        return recursiveCheck(obj);
    }

    return {hasError, errorInfo};
}
 
export default useValidation;