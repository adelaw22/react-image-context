import React from 'react'
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const GlobalTheme = createTheme({
    palette:{
        primary: {
            main: grey[700],
        },
        // secondary: {
        //     // main:white
        // },
    },
    components:{

    },
    typography:{
        fontFamily:['Montserrat', 'sans-serif'].join(','),
        fontSize: 12,
        h3:{
            fontWeight: '700',
            fontSize: '2rem',
        }
    },
    spacing: [0, 4, 8, 16, 32, 64],
});

