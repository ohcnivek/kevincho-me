import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Spiel from './components/Spiel';
import Header from './components/Header';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://kevincho.me">
        kevincho.me
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles({
  oldFBC: {
      color: 'rgb(66 103 178)'
    },
  messengerC: {
    color: 'rgb(174, 99, 255)'
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* <CssBaseline /> */}
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
     
        <Header></Header>

        <Typography variant="h5" component="h2" gutterBottom>
          {"I'm currently searching for a role as a Software Engineer Intern for Fall 2022 (Aug-Dec). If you have any roles available for me or have any questions about my experience or qualifications, "} 
          {"please don't hesistate to contact me @ "}

          {<Box component="span" fontWeight='fontWeightMedium' className={classes.oldFBC}>ohcnivek@gmail.com</Box>}
        </Typography>

        <Spiel></Spiel>
        
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
          Contact Me!
          {<Box component="span" fontWeight='fontWeightMedium' className={classes.messengerC}> Messenger: ohcnivek</Box>}
             
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}