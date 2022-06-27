import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField } from '@mui/material'
import { useForm } from '../../hooks/useForm'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUser } from '../../store/auth/thunks'
import { useMemo } from 'react'

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitter, setFormSubmitter] = useState(false);

  // Store
  const { status, errorMessage } = useSelector( state => state.auth );

  const isCheckingAuth = useMemo( () => status === 'checking' , [status]);

  const formData= {
    email: '',
    password: '',
    displayName: ''
  };

  const formValidation = {
    email: [ (value) => value.includes('@'), 'El correo debe tener una arroba'],
    password: [(value) => value.length >= 6, 'La password debe tener mas de 6 caracteres'],
    displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio']
  }

  const { displayName, email, password, onInputChange, formState, displayNameValid, emailValid, passwordValid, isFormValid } = useForm(formData, formValidation);

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitter(true);

    if( !isFormValid ) return;

    if( isFormValid ) {
      dispatch( startCreatingUser( formState ) );
    }
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
                error={!!displayNameValid && formSubmitter}
                helperText={ displayNameValid }
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
                error={!!emailValid && formSubmitter}
                helperText={ emailValid }
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
                error={!!passwordValid && formSubmitter}
                helperText={ passwordValid }
                />
              </Grid>

              <Grid container spacing={ 2 } sx={{ mb: 2}}>

                <Grid item xs={12} sm={6} md={6} display={ !!errorMessage ? '': 'none' }>
                  <Alert severity='error'>
                    {errorMessage}
                  </Alert>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <Button 
                    type='submit'
                    variant='contained' 
                    sx={{ mt: 2 }} 
                    fullWidth
                    disabled={ isCheckingAuth }
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
