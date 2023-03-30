import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({});

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleChange =
        (prop) => (event) => {
            setData({ ...data, [prop]: event.target.value });
        };
    const handleClick = (e) => {
        console.log(data)
    }

    return (
        <>
            <div className="App">
                <div className="d-flex">
                    <div className="h1-color">
                        <h4>Already Member</h4>
                    </div>
                    <div>
                        <Tooltip title="This Feature has not enabled">
                            <p>Need Help ?</p>
                        </Tooltip>
                    </div>
                </div>
                <div className="form" >
                    <FormControl sx={{ m: 1, width: '43ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type='text'
                            label="Email"
                            required={true}
                            onChange={handleChange("email")}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '43ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={handleChange("password")}
                            required={true}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <button className="secondary" onClick={handleClick} >Sign In</button>
                </div>
            </div>
            <div className="d-flex2">
                <div>
                    <h4>Don't have an account yet?</h4>
                </div>
                <Link to="/signup">
                    <div className="color-black"  >
                        <h3>Create an account</h3>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default SignIn;
