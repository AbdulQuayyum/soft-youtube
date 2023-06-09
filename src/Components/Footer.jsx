import React from 'react'
import { Typography } from "@mui/material";

const Footer = () => {
    return (
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
            Copyright © {new Date().getFullYear()} Abdul-Quayyum Alao
        </Typography>
    )
}

export default Footer