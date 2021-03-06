import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { chekingCredentials } from '../../store/auth/authSlice'
import { checkingAuthentication, startGoogleSignIn, startLoginWithPassAndEmail } from '../../store/auth/thunks'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {

  const { status } = useSelector( state => state.auth );

  const dispatch = useDispatch();

  const { email, password, onInputChange, formState } = useForm({
    email: 'engel@gmail.com',
    password: '123456',
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status] );

  const onSubmit = ( event ) => {
    event.preventDefault();
    dispatch( startLoginWithPassAndEmail({email, password}) );
  };

  const onGoogleSignIn = ( event ) => {
    event.preventDefault();
    dispatch( startGoogleSignIn() );

    console.log('GoogleSignIn');
  };

  return (
    <>
      <AuthLayout title='Login'>

        <form>
            <Grid container>
              <Grid item xs={ 12 } >
                <TextField label="Email" 
                type="email" 
                sx={{ mt: 1 }} 
                fullWidth
                autoComplete='on'
                name='email'
                value={ email }
                onChange={ onInputChange }
                />
              </Grid>

              <Grid item xs={ 12 } >
                <TextField label="Password" 
                type="password" 
                sx={{ mt: 2 }} 
                fullWidth
                autoComplete='on'
                name='password'
                value={ password }
                onChange={ onInputChange }
                />
              </Grid>

              <Grid container spacing={ 2 } sx={{ mb: 2}}>
                <Grid item xs={12} sm={6} md={6}>
                  <Button 
                    type='submit' 
                    variant='contained' 
                    sx={{ mt: 2 }} 
                    onClick={ onSubmit } 
                    fullWidth
                    disabled={ isAuthenticating }
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Button 
                    type='submit' 
                    onClick={ onGoogleSignIn } 
                    variant='contained' 
                    sx={{ mt: 2 }} 
                    fullWidth
                    disabled={ isAuthenticating }
                  >
                    <Google sx={{mr: 1}}/> Google
                  </Button>
                </Grid>
              </Grid>

              <Grid container direction='row' justifyContent='end'>
                <Link component={ RouterLink } color='inherit' to='/auth/register'>
                  Not Registered? Create account
                </Link>
              </Grid>

            </Grid>
          </form>

      </AuthLayout>
      
    </>
  )
}
