import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Link, TextField, Typography } from '@mui/material';
import FilledInput from '@mui/material/FilledInput';
import { useForm } from 'react-hook-form';
import { emailRegex } from '../helpers/regex';
import { api } from '../api/axios/instance';
import { apiNewUser } from '../api/calls/users';

export const SignUp = () => {
	const [showPassword, setShowPassword] = useState(false);


	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);

		apiNewUser(data);
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
								Sign Up
							</Typography>

							<TextField
								label='User Name'
								variant='filled'
								fullWidth
								error={errors.userName && true}
								helperText={errors.userName ? errors.userName?.message : ''}
								{...register('userName', {
									required: { value: true, message: 'user name is required' },
									minLength: {
										value: 6,
										message: 'El usuario debe contener minimo 6 caracteres',
									},
									maxLength: {
										value: 20,
										message: 'El usuario debe contener maximo 20 caracteres',
									},
								})}
							/>
							<TextField
								label='Email'
								variant='filled'
								fullWidth
								error={errors.email && true}
								helperText={errors.email ? errors.email?.message : ''}
								{...register('email', {
									required: { value: true, message: 'El correo es requerido' },
									pattern: {
										value: emailRegex,
										message: 'Introduce un correo valido',
									},
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
									
									{...register('password', {
										required: {
											value: true,
											message: 'password is required',
										},
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
								already have an account? <Link href='/login'>LogIn</Link>
							</Grid>
						</form>
					</Paper>
				</Grid>
			</Grid>
		</>
	);
};
