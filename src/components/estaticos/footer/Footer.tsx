import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid justifyContent="center" alignItems="center" item sm={12}>
                <Box className='box2'>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-nos nas redes sociais </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://github.com/SustentaMais" target="_blank">
                            <GitHubIcon className='redes' />
                        </a>
                        <a href="mailto:sustentamais52@gmail.com" target="_blank">
                            <EmailIcon className='redes' />
                        </a>
                    </Box>
                    <Box>
                        <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2022 Copyright:</Typography>
                        <a className='textoCor' target="_blank" href="https://github.com/SustentaMais">
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >Sustenta+</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default Footer;