import { User } from "lucide-react"
import { useState } from "react";
import Navs from "./nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {

  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const [validuser, setvaliduser] = useState("");
  const [validpass, setvalidpass] = useState("");

  var navigate = useNavigate()

  function handleuser(event) {
    setuser(event.target.value)
    if (!/^\w/.test(event.target.value)) {
      setvaliduser("enter valid user name")
    }
    else {
      setvaliduser("")
    }
  }

  function handlepass(event) {
    setpass(event.target.value)
    if (!/^\d{3}$/.test(event.target.value)) {
      setvalidpass("enter 3 digit password")
    }
    else{
      setvalidpass("")
    }
  }

  function check() {
    var logindetails = axios.get(`https://backend-login-three.vercel.app/login?username=${user}&password=${pass}`)

    logindetails.then(function (data) {
      if (data.data === true) {
        navigate("/sucess")
      }
      else {
        navigate("/fail")
      }
    })
  }

  return (<>

    <Navs />
    <div className="login-bg">
      <div className="login">
        <div className="login-page">
          <h1 className="heading">Welcome to Rio Hostar!</h1>
          <div className="user">
            <User size={40} />
            <h1>User Login</h1>
          </div>


          <div className="form">
            <div className="input-box1">
              <label htmlFor="usernames" >Username</label>
              <input type="text" placeholder="Enter your username" id="usernames" onChange={handleuser} name="username" />
              <p>{validuser}</p>
            </div>

            <div className="input-box2">
              <label htmlFor="passwords">Password</label>
              <input type="password" placeholder="Enter your password" id="passwords" onChange={handlepass} name="password" />
              <p>{validpass}</p>
            </div>

            <button onClick={check}>Login</button>
          </div>

        </div>
      </div>


    </div>

  </>)
}
export default App