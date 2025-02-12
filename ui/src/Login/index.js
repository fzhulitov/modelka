import { useState } from "react";
import "./index.css";
import "../alignment.css";
import {Link} from "react-router-dom";
import {Link} from "react-router-dom";

async function loginUser(username, password) {
    return fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password}),
    })
        // .then((data) => "token" /*data.json()*/)
        // .catch((reason) => "server not responded");

    // let formData = new FormData();
    // formData.append('username',username);
    // formData.append('password', password);

    /* const response = await fetch("http://localhost:8080/login", {
       method: "POST",
       mode: "cors",
       referrer: "origin",
       headers: {
         "Content-Type": "multipart/form-data",
         "credentials" : `include`,
       },
       body: formData
     }).catch(err=>alert(`Error: ${err}`));

     console.log(response.ok);*/

    //Hedin want -  not working
    //  try {
    //
    var response1 = await fetch('http://localhost:3000/login', {
        method: 'POST',
        // mode: "cors",
        body: new URLSearchParams({
            'username': username,
            'password': password,
        })
    });
    console.log("response1", response1)

    //
    var resp2 = await fetch("http://localhost:3000/username", {
        method: 'GET',
        // credentials: 'same-origin',
        // mode: "no-cors",
    })

    console.log("resp2", resp2)

    const json = await resp2.json();

    console.log("json", json)
    //  }
    //  catch (e) {
    //    console.error(`ErroR:  `, e);
    //  }
    // try {
    // let  js = await response1.json();
    // console.log(js.toString());
    // }
    // catch (e) {
    //   alert(e);
    // }
    /*
   Test of username
    fetch("http://localhost:8080/username", {
      method: 'GET',
      credentials: 'same-origin',
      mode: "no-cors",
    })
        .then((response) => response.json())
        .then((json) => {
          alert ("получили");
          console.log('Gotcha');
        }).catch((err) => {
      console.log(err);

    });
  */


    return {}//response1;
    /*  .then((data) => "token" /!*data.json()*!/)
      .catch((reason) => "server not responded");*/
}

export default function Login({ setToken }) {
  console.log("Login in " + setToken);

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser(username, password);
        console.log("submit " + setToken);
        setToken(token);
    };

    return (
        <>

            <div className="LoginForm">
                <div className="login_table_back">
                    <div className="login_frame">
                        <div className="login_items">
                            <form onSubmit={handleSubmit}>
                                <label className="Pass">
                                    <span>Логин</span>
                                    <input
                                        className="UsernameInput"
                                        type="text"
                                        onChange={(e) => setUserName(e.target.value)}
                                    />

                                </label>
                                <label className="Pass">
                                    <span>Пароль</span>
                                    <input
                                        className="PasswordInput"
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                </label>
                                <div className="Okreg">
                                    <button type="submit" className="Button1" name="login">
                                        <span> OK </span>
                                    </button>
                                    <p><Link className="Registration" to="/register">Регистрация</Link></p>
                                    {/*<a className="Registration" href="">*/}
                                    {/*  Регистрация*/}
                                    {/*</a>*/}

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
