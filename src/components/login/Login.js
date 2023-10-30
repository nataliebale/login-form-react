import '../../styles/login.css';
import Input from "../common/Input";
import Button from "../common/Button";
import { useState } from "react";
import Message from "../common/Message";

function Login(){
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function onLogin(){
    if(username && password){
      setLoggedIn(true);
    } else {
      setErrorMessage('Fields are required');
    }
  }

  const responseForm = (
    loggedIn ? (<Message type='success' message='Successful login'></Message>) :
      (<Message type='error' message={ errorMessage }></Message>)
  );

  return (
    <div>
      { (loggedIn || errorMessage) ? responseForm : (
        <form className='login'>
          <Input
            title='Username'
            type='text'
            handleChange={(e) => setUsername(e)}
          ></Input>
          <Input
            title='Password'
            type='password'
            handleChange={(e) => setPassword(e)}
          ></Input>
          <Button
            title='Submit'
            mode='black'
            onClick={() => onLogin()}
          ></Button>
        </form>
      )}
    </div>
  );
}

export default Login;
