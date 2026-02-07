import React, {useState} from "react";

function validateName(name){
 if (!name || name.trim() === '') {
        return 'Вписывай';
    }
    if (name.trim().length < 2) {
        return 'Минимум 2 символа брух';
    }
    return '';
}
function validateEmail(email){
  if (!email || email.trim() === '') {
        return 'Вписывай';
    }
    const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Это не Имейл';
    }
    return '';
}
function validateAge(age){
   if (!age || age.trim() === '') {
        return 'Вписывай';
    }
    const ageNum = Number(age);
    if (isNaN(ageNum)) {
        return 'Это не число';
    }
    if (ageNum < 18) {
        return 'Тебе нет 18';
    }
    return ''; 
}

function RegistrationForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [ageError, setAgeError] = useState('');

    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
     const nameErr = validateName(name);
    const emailErr = validateEmail(email);
    const ageErr = validateAge(age);
        
    setNameError(nameErr);
    setEmailError(emailErr);
    setAgeError(ageErr);
        
       if (nameErr || emailErr || ageErr) {
            console.log('Form has errors:', { nameErr, emailErr, ageErr });
            return; 
        }
        console.log('Форма отправлена:', { name, email, age });
        setSuccess(true);
        setName('');
        setEmail('');
        setAge('');
};

    return(
       <div>
        <h2>Register</h2>
        {success && <p style={{color: 'green'}}>Регистрация прошла успешно!</p>}
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name: 
            </label>
            <input type="text" id="name" value={name} onChange={(e) => {
                const value = e.target.value;
                setName(value);
                setNameError(validateName(value));
                }}/>
            {nameError && <p>{nameError}</p>}
                <br></br>
            <label htmlFor="email">
                Email: 
            </label>
            <input type="email" id="email" value={email} onChange={(e) => {
                const value = e.target.value;
                setEmail(value);
                setEmailError(validateEmail(value));
                }}/>
            {emailError && <p>{emailError}</p>}
            <br></br>
            <label htmlFor="age">
                Age: 
            </label>
            <input type="number" id="age" value={age} onChange={(e) => {
                const value = e.target.value;
                setAge(value);
                setAgeError(validateAge(value));
                }}/>
            {ageError && <p>{ageError}</p>}
       <br></br>
        <button type="submit">
          Submit
        </button>
        </form>
       </div>
    );
}
 export default RegistrationForm;