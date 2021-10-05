import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import './App.css';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import { Typography } from '@material-ui/core';

import SecurityIcon from '@material-ui/icons/Security'
import EventNoteIcon from '@material-ui/icons/EventNote'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'

const theme = createTheme({
  palette: {
    primary: {
      main: "#512D6D",
    },
    secondary: {
      main: "#B4B5DF",
    },
  },

  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace: {
    marginTop: "2.5rem"
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

function App() {
  const classes = styles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            My name is Jeremy Trendoff and this is my first ever website!
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="secondary">
            This is very exciting for me!
          </Typography>
        </div>

        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{fill:"#512D6D", height: "125", width: "125"}}/>} title="Secure" btnTitle="Show Me More"/>
          <Grid icon={<EventNoteIcon style={{fill:"#002855", height: "125", width: "125"}}/>} title="Reliable" btnTitle="Show Me More"/>
          <Grid icon={<TrendingUpIcon style={{fill:"#B4B5DF", height: "125", width: "125"}}/>} title="Performant" btnTitle="Show Me More"/>
        </div>

        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid icon={<SecurityIcon style={{fill:"#512D6D", height: "125", width: "125"}}/>} title="Secure" btnTitle="Show Me More"/>
          <Grid icon={<EventNoteIcon style={{fill:"#002855", height: "125", width: "125"}}/>} title="Reliable" btnTitle="Show Me More"/>
          <Grid icon={<TrendingUpIcon style={{fill:"#B4B5DF", height: "125", width: "125"}}/>} title="Performant" btnTitle="Show Me More"/>
        </div>
        
      </ThemeProvider>
    </div>
  );
}

export default App;
