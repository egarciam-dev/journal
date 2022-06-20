import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField } from '@mui/material'
import { useForm } from '../../hooks/useForm'
import { Google } from '@mui/icons-material'

export const RegisterPage = () => {

  const formData = {
    email: 'engel@gmail.com',
    password: 'engel2003',
    displayName: 'Engel Garcia'
  }

  const { displayName, email, password, onInputChange, formState } = useForm(formData);

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <>
      <AuthLayout title="Register">
        <form onSubmit={ onSubmit }>
            <Grid container>
              <Grid item xs={ 12 } >
                <TextField label="Nombre completo" 
                type="text" 
                sx={{ mt: 1 }} 
                fullWidth
                autoComplete='on'
                name='displayName'
                value={ displayName }
                onChange={ onInputChange }
                />
              </Grid>

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
                    fullWidth
                  >
                    Create Account
                  </Button>
                </Grid>
              </Grid>

              <Grid container direction='row' justifyContent='end'>
                <Link component={ RouterLink } color='inherit' to='/auth/login'>
                  Already Registered? Login
                </Link>
              </Grid>

            </Grid>
          </form>
      </AuthLayout>
    </>
  )
}
