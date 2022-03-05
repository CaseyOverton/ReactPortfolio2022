import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Moment from 'react-moment';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography'
const Nav = () => {
  const style = 
  {
    display: 'flex',
    justifyContent: 'center',
    fontSize:  20,
  }
 
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Spartan',
        'sans-serif',
      ].join(','),
      fontSize: 40,
    },
        primary: {
            main: 'black',
            contrastText: '#fff',
        },
        secondary: {
            light: 'black',
            main: 'black',
            dark: '#007856',
            contrastText: '#000'
        }
      });
      const date = new Date();
    
    return (
      <ThemeProvider style={theme} >
      <Breadcrumbs style={{marginTop: 10, color: 'black', fontWeight: 'boldest', display: 'flex',
    justifyContent: 'center', fontSize:  20,}} aria-label="breadcrumb">
  <button style={{backgroundColor: '#00000000',textDecoration:'none', border: 'none', fontWeight: 'bold', fontSize:  20,}} >
     <Link  style={{color: 'black', fontWeight: 'bold', }} to="/" >
       <Typography style={{fontWeight: 800, fontSize:  25,  }}>
        Home
      </Typography>
      </Link>
  </button>
  <button style={{backgroundColor: '#00000000',textDecoration:'none', border: 'none', fontWeight: 'bold', fontSize:  30,}} >
     <Link  style={{color: 'black', textDecoration: 'none !important' }} to="/Contact" >
       <Typography style={{fontWeight: 800, fontSize:  25,}}>
        Contact
      </Typography>
      </Link>
  </button>
  <button style={{backgroundColor: '#00000000',textDecoration:'none', border: 'none', fontWeight: 'bold', fontSize:  35,}} >
     <Link  style={{color: 'black', fontWeight: 'bold', }} to="/Resume" >
       <Typography style={{fontWeight: 800, fontSize:  25,}}>
        Resume
      </Typography>
      </Link>
  </button>

      <div style={{paddingRight: '-50%', }} >
      <Moment  style={{color: 'black', fontSize: 25, fontWeight: 'bold'}} format='h:mm a'>{date}</Moment>
      </div>
    </Breadcrumbs>
    </ThemeProvider>
   
);
    }

export default Nav;