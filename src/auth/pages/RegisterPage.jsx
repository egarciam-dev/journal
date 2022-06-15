import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField } from '@mui/material'
import { Google } from '@mui/icons-material'

export const RegisterPage = () => {
  return (
    <>
      <AuthLayout title="Register">
        <form>
            <Grid container>
              <Grid item xs={ 12 } >
                <TextField label="Nombre" 
                type="text" 
                sx={{ mt: 1 }} 
                fullWidth
                autoComplete='on'
                />
              </Grid>

              <Grid item xs={ 12 } >
                <TextField label="Email" 
                type="email" 
                sx={{ mt: 1 }} 
                fullWidth
                autoComplete='on'
                />
              </Grid>

              <Grid item xs={ 12 } >
                <TextField label="Password" 
                type="password" 
                sx={{ mt: 2 }} 
                fullWidth
                autoComplete='on'
                />
              </Grid>

              <Grid container spacing={ 2 } sx={{ mb: 2}}>
                <Grid item xs={12} sm={6} md={6}>
                  <Button variant='contained' sx={{ mt: 2 }} fullWidth>Create Account</Button>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Button variant='contained' sx={{ mt: 2 }} fullWidth>
                    <Google sx={{mr: 1}}/> Google
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
