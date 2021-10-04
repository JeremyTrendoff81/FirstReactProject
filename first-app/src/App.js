import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

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

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
      </ThemeProvider>
    </div>
  );
}

export default App;
