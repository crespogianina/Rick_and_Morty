const REGEX_EMAIL = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const REGEX_PASSWORD = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/

const validation = (userData,errors,setErrors) => {
    //!email
    if(!userData.email) {
        setErrors({...errors, email: 'Email vacío'})
    }
    else if (userData.email.length > 35) {
        setErrors({...errors, email: 'El email debe tener menos de 35 caracteres'})
    }
    else if (!REGEX_EMAIL.test(userData.email)) {
        setErrors({...errors, email: 'Email inválido'});
    }
    else {
        setErrors({...errors, email: ''});
    }

    //!password
    if(userData.password.length < 6 || userData.password.length > 10) {
        setErrors({...errors, password: 'Cantidad de caracteres inválida'});
    }
    else if(!/\d/.test(userData.password)) {
        setErrors({...errors, password: 'Debe tener al menos un número'});
    }
    else{
        setErrors({...errors, password: ''});
    }

    
}

export default validation;