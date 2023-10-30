import '../../styles/registration.css';
import Input from "../common/Input";
import Button from "../common/Button";
import { useState } from "react";
import Message from "../common/Message";

function Registration(){
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function onSubmit(){
    if(firstName &&
      lastName &&
      age &&
      email &&
      password &&
      confirmPassword
    ) {
      if(password !== confirmPassword){
        setErrorMessage('Passwords should be the same');
        return;
      }
      setRegistered(true);
    } else {
      setErrorMessage('Fields are required');
    }
  }

  const responseForm = () => {
    return ( registered ?
        (<Message type='success' message='Successful registration'></Message>) :
        (<Message type='error' message={ errorMessage }></Message>));
  };

  const registrationForm = () => {
    return (
      <form className='registration'>
        <Input
          title='First Name'
          type='text'
          handleChange={(e) => setFirstName(e)}
        ></Input>
        <Input
          title='Last Name'
          type='text'
          handleChange={(e) => setLastName(e)}
        ></Input>
        <Input
          title='Age'
          type='number'
          handleChange={(e) => setAge(e)}
        ></Input>
        <Input
          title='Email'
          type='email'
          handleChange={(e) => setEmail(e)}
        ></Input>
        <Input
          title='Password'
          type='password'
          handleChange={(e) => setPassword(e)}
        ></Input>
        <Input
          title='Confirm Password'
          type='password'
          handleChange={(e) => setConfirmPassword(e)}
        ></Input>
        <Button
          title='Submit'
          mode='black'
          onClick={() => onSubmit()}
        ></Button>
      </form>
    )
  }

  return (
    <div>
      { (registered || errorMessage) ? responseForm() : registrationForm()}
    </div>
  );
}

export default Registration;
