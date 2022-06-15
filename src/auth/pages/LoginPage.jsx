import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
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
                  <Button variant='contained' sx={{ mt: 2 }} fullWidth>Login</Button>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Button variant='contained' sx={{ mt: 2 }} fullWidth>
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
