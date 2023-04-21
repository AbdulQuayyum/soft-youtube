import React from 'react'
import { Box } from '@mui/material';

import { Navbar } from "../Components/Index"
import MainRoutes from '../Routes/Main.Routes';

const MainLayout = () => {
    return (
        <Box sx={{ backgroundColor: '#000' }}>
            < Navbar />
            < MainRoutes />
        </Box>
    )
}

export default MainLayout