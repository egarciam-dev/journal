import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../components/ImageGallery'

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' sx={{ mb:1 }}>

        <Grid item>
            <Typography fontSize={ 29 } fontWeight='light'>August 28, 2022.</Typography>
        </Grid>

        <Grid item>
            <Button color='primary' sx={{ padding: 2}}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
                Save
            </Button>
        </Grid>

        <Grid container>

          <TextField 
            type='text'
            variant='filled'
            fullWidth
            placeholder='Title'
            label='Title'
            sx={{ border: 'none', mb: 1}}
          />

          <TextField 
            type='text'
            variant='filled'
            fullWidth
            multiline
            placeholder="What's on your mind?"
            minRows={5}
          />

        </Grid>

        {/* Image Gallery */}
        <ImageGallery />

    </Grid>
  )
}
