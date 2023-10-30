import './App.css';
import { useState } from "react";
import Registration from "./components/registration/Registration";
import Login from "./components/login/Login";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  function changeForm(value){
    setIsLogin(value);
  }

  return (
    <div className='app-container'>
      <div className='nav'>
        <a
          onClick={() => changeForm(false)}
          className={`nav-link ${!isLogin && "active"}`}
        >
          REGISTER
        </a>
        <a
          onClick={() => changeForm(true)}
          className={`nav-link ${isLogin && "active"}`}
        >
          LOGIN
        </a>
      </div>
      <main>
        { isLogin ? <Login></Login> : <Registration></Registration> }
      </main>
    </div>
  );
}

export default App;
