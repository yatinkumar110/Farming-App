import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    console.log("LOGIN HANDLE SUBMIT CONSOLELOG ", email);
    navigate('/');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="login-wrapper"><h1>Please Log In</h1></div>
      <Box
        component="form" onSubmit={handleSubmit}
        sx={{
          '& > :not(style)': { m: 1, width: '20ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(event) => setEmail(event.target.value)} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            id="outlined-password-input"
            label="Password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            variant="outlined"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <VisibilityIcon style={{ marginLeft: 8, cursor: 'pointer' }} onClick={togglePasswordVisibility} />
        </div>
        <Button style={{
          backgroundColor: 'transparent',
          border: '2px solid green',
          color: 'green',
          borderRadius: '20px',
        }} variant="submit" onClick={handleSubmit}>Submit</Button>
      </Box>
      <div className="login2" ></div>
    </>
  );
}