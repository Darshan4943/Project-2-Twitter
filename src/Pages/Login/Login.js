import {  Button, Card, Step, Stepper, TextField } from '@mui/material'
// import Step from '@mui/material/Step';
// import './App.css'

import TwitterIcon from '@mui/icons-material/Twitter';
import { Link, useNavigate } from 'react-router-dom';
import AppleIcon from '@mui/icons-material/Apple';
import styles from './Login.module.css'
import { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';

function Login() {
      const data = [
                    "","or",""
                   ];
  const navigate=useNavigate()
  const [username,setUsername]=useState("")
  const [password,setpassword]=useState("")
  // const [result,setResult]=useState(false);

  function handleLogin(){
    const Users = JSON.parse(localStorage.getItem('user') || []);
    let usernameMatchFound = false;
  
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].name.toString() === username.toString() || Users[i].email.toString() === username.toString() ||Users[i].phone.toString() === username.toString()) {
        usernameMatchFound = true;
        if (Users[i].password.toString() === password.toString()) {
          alert("success")
          navigate('/home')
          return;
        } else {
          alert("Invalid credentials");
          return;
        }
      }
    }
  
    if (!usernameMatchFound) {
      alert("Invalid username");
    }
  }

  // function handleSubmit(e){
  //   e.preventDefault();
  //   if(result){

  //     navigate("/home")
  //   }
  // }
  return (
    <div>
      <div>
        <Card sx ={{ minwidth: 275, maxwidth: 680 }} className = {styles.card}>
          <div className={styles.main}>
            <clearIcon sx={{ display: "inline-block", cursor: "pointer"}}  />
              <div className={styles.container}>
                <TwitterIcon sx={{ color: "rgb(25 161 242)",fontSize:45 }}/>
                <h1>Sign in to Twitter</h1>
                <Button className={styles.btn}  variant="contained">{" "}
                    <GoogleIcon/> Signin with Gmail
                </Button><br/>
                <Button className={styles.btn}  variant="contained"><AppleIcon/>Sign in with Apple</Button><br/>
                <form>
                  <Stepper >
                    {data.map((label) => (
                    <Step key={label}>{label} </Step>
                    ))}
                  </Stepper>
                  <TextField className={styles.input} id="outlined-basic" label="Email,Phone or Username" variant="outlined" onChange={(e)=>{setUsername(e.target.value)}} /><br/>
                  <TextField className={styles.input} type='password' id="outlined-basic" label="Password" variant="outlined" onChange={(e)=>{setpassword(e.target.value)}} /><br/>
                  
                  <Button className={styles.btn}  variant="contained" onClick={handleLogin}>Login</Button><br/>
                  <Button className={styles.btn}  variant="contained">Forgot Password</Button><br/>
                </form>
                   <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
              </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Login

{/* <Stepper >
{data.map((label) => (
  <Step key={label}>{label}
  </Step>
  ))}
</Stepper> */}

      
      {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
      <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
          <Input
          id="standard-adornment-password"
          endAdornment={
            <InputAdornment position="end">
                <IconButton>
                <Link to="/home"><TwitterIcon/></Link>
                </IconButton>
              </InputAdornment>
            }
            />
            // const data = [
            //   "","or",""
            // ];
        </FormControl> */}