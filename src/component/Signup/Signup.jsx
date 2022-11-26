import React, { useState } from 'react'
import './Signup.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
  const options = [
    { value: 'doctor', text: 'Doctor' },
    { value: 'patient', text: 'Patient' }
  ];

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState('');
  const [type, setType] = useState(options[1].value);
  const [pwd, setPwd] = useState('');
  const [confirm, setConfirm] = useState('');

  const [hiddenPwd, setHiddenPwd] = useState(false);
  const [hiddenConfirmPwd, setHiddenConfirmPwd] = useState(false);


  // const handleInputChange = (e) => {
  //   const { id, value } = e.target;
  //   if (id === "firstName") {
  //     setUsername(value);
  //   }
  //   if (id === "lastName") {
  //     setLastName(value);
  //   }
  //   if (id === "email") {
  //     setEmail(value);
  //   }
  //   if (id === "password") {
  //     setPassword(value);
  //   }
  //   if (id === "confirmPassword") {
  //     setConfirmPassword(value);
  //   }
  // }

  const handleSubmit = () => {
    const notify = (text) => toast.warning(text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });


    function ValidateEmail(mail) {
      // if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      //   return (true)
      // }
      // return (false)

      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }

    if (!username) {
      notify("Username is required");

      // toast.warning('Username is required', {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    }

    else if (!email) {
      notify("Email is required");

      // toast.warning('Email is required', {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    }
    else if (ValidateEmail(email)) {
      notify("Email is invalid");

      // toast.warning('Email is invalid', {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    }

    else if (!phoneNumber) {
      notify("Phone number is required");

      // toast.warning('Phone number is required', {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    }

    else if (!address) {
      notify("Address is required");

      // toast.warning('Address is required', {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    }

    else if (!birthday) {
      notify("Birthday is required");

      // toast.warning('Birthday is required', {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    }

    else if (!pwd) {
      notify("Password is required");

      // toast.warning('Password is required', {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    }
    else if (!confirm) {
      notify("Confirm Password is required");

      // toast.warning('Confirm Password is required', {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    }
    else if (pwd !== confirm) {
      notify("Password and Confirm Password does not match");

      // toast.warning('Password and Confirm Password does not match.', {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    }

    else {
      console.log(username);
      console.log(email);
      console.log(phoneNumber);
      console.log(address);
      console.log(birthday);
      console.log(type);
      console.log(pwd);
      console.log(confirm);
      const data = {
        username,
        email,
        phoneNumber,
        address,
        birthday,
        type,
        "password": pwd
      }

      fetch('https://doctor-apt-service.herokuapp.com/register', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }

  return (
    <div className="backgr">
      <div className="container">
        <div className="container_left active-left">
          <div className="image1"></div>
        </div>
        <div className="container_right">
          <div className="logo">
            <img src="/public/images/logo.png" alt="" />
          </div>


          {/* <form action="/" className="form" method="post" onSubmit={() => handleSubmit()}> */}
          <div className="form">

            <div className="form-inner">
              <div className="welcome">
                <h1 className="text">Sign Up</h1>
              </div>

              <div className="form-group">
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" required />
                <label>UserName</label>
              </div>

              <div className="form-group">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email" required />
                <label>Email</label>
              </div>


              <div className="form-group">
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="tel" name="phonenumber" required />
                <label>Phone number</label>
              </div>

              <div className="form-group">
                <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" name="address" required />
                <label>Address</label>
              </div>


              <div className="form-group">
                <input value={birthday} onChange={(e) => setBirthday(e.target.value)} type="date" name="birthday" required />
                <label>Birthday</label>
              </div>

              <div className="form-group">
                <label for="type">Type:</label>
                <select value={type} onChange={(e) => setType(e.target.value)} id="type" name="type">
                  {
                    options.map(option => (
                      <option value={option.value}>{option.text}</option>
                    ))
                  }
                  {/* <option value="doctor" selected>Doctor</option>
                  <option value="patient">Patient</option> */}
                </select>

              </div>


              <div className="form-group2">
                <div className="pass-box">
                  <input value={pwd} onChange={(e) => setPwd(e.target.value)} type={hiddenPwd ? "text" : "password"} id="password" name="password" required minLength={8} maxLength={20} />
                  <label>Password</label>
                  <div className="eye" onClick={() => setHiddenPwd(!hiddenPwd)}>
                    <i className={hiddenPwd ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                  </div>
                </div>
              </div>

              <div className="form-group2">
                <div className="pass-box">
                  <input value={confirm} onChange={(e) => setConfirm(e.target.value)} type="password" id="confirm_password" name="confirm_password" required minLength={8} maxLength={20} />
                  <label>Confirm Password</label>
                  <div className="eye" onClick={() => setHiddenConfirmPwd(!hiddenConfirmPwd)}>
                    <i className={hiddenConfirmPwd ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                  </div>
                </div>
              </div>

              {/* 
              <div className="remember">
                <div><input type="checkbox" /> <span>Remember me</span></div>
                <div className="forgot-off">
                  <a href="#">Forgot password?</a>
                </div>
              </div> */}
            </div>
            <button className="submit-btn" onClick={() => handleSubmit()}>Submit</button>
            {/* <input className="submit-btn" type="submit" value="Submit" /> */}


            {/* <div className="forgot-active">
              <a href="#">Forgot password?</a>
            </div> */}
          </div>
        </div>
      </div>
      <ToastContainer />

    </div>
  )
}

export default Signup;