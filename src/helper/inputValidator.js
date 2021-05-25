
const validatiotnPatterns = {
    text : {
        regex : /[A-Za-z0-9]{1}/,
    },
    email :{
        regex : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message : 'Enter a valid email'
    },
    password :{
        regex : /[a-zA-Z0-9]{6,}/,
        message : 'Password should contain a number, a letter, min eight characters'
    },
    number:{
        regex : /[0-9]{1}/,
        message : 'Set a number between 1 and 12'
    }
}



export const validateInput = (input, type) =>{
    const regex = validatiotnPatterns[type].regex.test(input)
    return  regex
}

