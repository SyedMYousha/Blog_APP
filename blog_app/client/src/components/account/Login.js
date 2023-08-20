import { Box, Button, TextField, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import { API } from '../../service/api';

const Component = styled(Box)`
  width: 400px;
  margin: 100px auto;
  box-shadow: 0 0 30px lightgrey;
  border-radius: 10px;
`;

const Wrapper = styled(Box)`
  padding: 0px 25px 25px 25px;
  display: flex;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161; 
  line-height: 0;
  margin-top: 10px;
  font-weight: 600; 
`;

const signupInitialValues = {
  name: '',
  email: '',
  password: '',
};

const Login = () => {
  const imageURL =
    'https://img.freepik.com/free-vector/quill-pen-logo-template_23-2149852429.jpg?w=740&t=st=1692120404~exp=1692121004~hmac=3d13543e56493a9a0c8639df7be1314c7c2ad0a1ef817027eba8e49421ba4a0a';

  const [user, setUser] = useState('login');
  const [inputFieldLogin, setInputFieldLogin] = useState({
    email: '',
    password: '',
  });
  const [inputFieldRegister, setInputFieldRegister] = useState(signupInitialValues);
  const [error, setError] = useState('');

  const toggleUser = () => {
    setError('');
    setUser(user === 'login' ? 'register' : 'login');
    setInputFieldRegister(signupInitialValues); // Reset the register form fields
  };

  const onInputChange = (e, form) => {
    const { name, value } = e.target;
    if (form === 'login') {
      setInputFieldLogin((prevInput) => ({ ...prevInput, [name]: value }));
    } else {
      setInputFieldRegister((prevInput) => ({ ...prevInput, [name]: value }));
    }
    setError('');
  };

  const submitLogin = () => {
    console.log(inputFieldLogin);
    // Add login logic here
  };

  const submitRegister = async () => {
    let response = await API.userSignup(inputFieldRegister);
    if (response.isSuccess) {
      setError('');
      setInputFieldRegister(signupInitialValues);
      setUser('login'); // Fixed the missing setAccount function call
    } else {
      setError('Something went wrong, please try again!');
    }
  };

  return (
    <Component>
      <Box>
        <img
          style={{
            width: '120px',
            display: 'flex',
            margin: 'auto',
            paddingTop: '10px',
          }}
          src={imageURL}
          alt="logo"
        />
        {user === 'login' ? (
          <Wrapper>
            <TextField
              variant="standard"
              name="email"
              label="Email"
              type="email"
              onChange={(e) => onInputChange(e, 'login')}
              value={inputFieldLogin.email}
              required
            />
            <TextField
              variant="standard"
              label="Password"
              name="password"
              type="password"
              onChange={(e) => onInputChange(e, 'login')}
              value={inputFieldLogin.password}
              required
            />
            {error && <Error>{error}</Error>}
            <Button variant="contained" onClick={submitLogin}>
              Login
            </Button>
            <Typography>OR</Typography>
            <Button variant="outlined" onClick={toggleUser}>
              Create an account
            </Button>
          </Wrapper>
        ) : (
          <Wrapper>
              <TextField
              variant="standard"
              type="text"
              name="name"
              label="Name"
              onChange={(e) => onInputChange(e, 'register')}
              value={inputFieldRegister.name}
              required
            />
            <TextField
              variant="standard"
              name="email"
              label="Email"
              onChange={(e) => onInputChange(e, 'register')}
              value={inputFieldRegister.email}
              required
            />
            <TextField
              variant="standard"
              name="password"
              label="Password"
              onChange={(e) => onInputChange(e, 'register')}
              type="password"
              value={inputFieldRegister.password}
              required
            />
            {error && <Error>{error}</Error>}
            <Button onClick={submitRegister} variant="contained">
              Register
            </Button>
            <Typography>OR</Typography>
            <Button variant="outlined" onClick={toggleUser}>
              Already have an account
            </Button>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
