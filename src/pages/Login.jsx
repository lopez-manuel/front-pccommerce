import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Alert, Button, Link, TextField, Typography } from '@mui/material';
import FilledInput from '@mui/material/FilledInput';
import { useForm } from 'react-hook-form';
import { emailRegex } from '../helpers/regex';
import { apiNewUser } from '../api/calls/users/users';
import { useNavigate } from 'react-router-dom';
import { apiLogin } from '../api/calls/auth/auth';

export const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [alert, setAlert] = useState({ open: false, type: 'error', message: ''});
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();


	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);

        apiLogin(data)
            .then(response =>{
                setAlert({
                    open: true,
                    type: 'success',
                    message: response.message
                });

                setUserName("");
                setPassword("");

                setTimeout(() => {
                    navigate('/');
                }, 1500);

            })
            .catch( error => {
                setAlert({open: true, type: 'error', message: error.message})
            })


	};

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	return (
		<>
			<Grid
				display='flex'
				flexDirection='row'
				alignContent='center'
				container
				height='100vh'
				width='100vw'
			>
				
				<Grid item width='300px' margin='0 auto'>
					<Paper
						elevation={3}
						sx={{
							padding: '16px',
							display: 'flex',
							flexDirection: 'column',
							gap: '16px',
						}}
					>
						{(alert.open) && <Alert severity={alert.type}>{alert.message}</Alert>}
						<form
							onSubmit={handleSubmit(onSubmit)}
							style={{
								padding: '16px',
								display: 'flex',
								flexDirection: 'column',
								gap: '16px',
							}}
						>
							<Typography textAlign='center' variant='h4'>
								Login
							</Typography>

							<TextField
								label='User Name or email'
								variant='filled'
								fullWidth
								value={userName}
								error={errors.email && true}
								helperText={errors.email ? errors.email?.message : ''}
								{...register('email', {
									required: { value: true, message: 'user name is required' },
									minLength: {
										value: 6,
										message: 'El usuario debe contener minimo 6 caracteres',
									},
									maxLength: {
										value: 20,
										message: 'El usuario debe contener maximo 20 caracteres',
									},
									onChange: (e) => setUserName(e.target.value)
								})}
							/>


							<FormControl fullWidth variant='outlined'>
								<InputLabel htmlFor='outlined-adornment-password'>
									Password
								</InputLabel>

								<FilledInput
									id='outlined-adornment-password'
									type={showPassword ? 'text' : 'password'}
									fullWidth
									error={errors.password && true}
									value={password}
									
									{...register('password', {
										required: {
											value: true,
											message: 'password is required',
										},
										onChange: (e) => setPassword(e.target.value)
									})}
									endAdornment={
										<InputAdornment position='end'>
											<IconButton
												aria-label='toggle password visibility'
												onClick={handleClickShowPassword}
												edge='end'
											>
												{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									}
								/>
							</FormControl>

							<Button type='submit' variant='contained'>
								Sing up
							</Button>

							<Grid>
                            You still do not have an account?<Link href='/signup'>Signup</Link>
							</Grid>
						</form>
					</Paper>
				</Grid>
			</Grid>
		</>
	);
};
