import './App.css';
import FilmList from './components/FilmList';
import NavBar from './components/NavBar';
import FilmInfo from './components/FilmInfo';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { 
  BrowserRouter as Router,
  Route,
  Switch
 } from 'react-router-dom';


const theme = createMuiTheme(); 

function App() {
  return (
    
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <Route path="/films"/>
          <Route path="/movie/:movie_id"/>
          <Switch>

            <Route exact path="/"/>
            <Route path="/films" component={FilmList}/>
            <Route path="/movie/:movie_id" component={FilmInfo}/>

          </Switch>
        </Router>
      </header>
    </div>
    </MuiThemeProvider>
    
  );
}

export default App;
