import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import { NavBar } from '../components/NavBar'
import { Sidebar } from '../components/Sidebar';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <>
        <Box sx={{ display: 'flex' }}>

            <NavBar drawerWidth={ drawerWidth }/>

            <Sidebar drawerWidth={ drawerWidth }/>

            {/* Main Content */}

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >

                <Toolbar>
                    
                </Toolbar>

                { children }

            </Box>


        </Box>
    </>
  )
}
