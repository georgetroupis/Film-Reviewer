import React from 'react';
import { 
  NavLink,

 } from 'react-router-dom';

import { 
  AppBar,
  Toolbar,
  Button,
  InputBase

} from '@material-ui/core';

import {
  Search as SearchIcon,
  GitHub as GitHubIcon
} from '@material-ui/icons';

import './NavBar.css';
import { fade, makeStyles } from '@material-ui/core/styles';


export default function NavBar() {

  const classes = useStyles();

    return (
        <div>
        <AppBar >
            <Toolbar variant="regular" className={classes.root}>
              <NavLink to="/">Film Reviewer</NavLink>
                
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <NavLink to="/films" className={classes.filmLink}>Films</NavLink>  
              <Button className="button" variant="contained">
                <a target="_blank" href="https://github.com/georgetroupis" rel="noreferrer">    
                  <GitHubIcon/>
                </a>
              </Button>
            </Toolbar>

      </AppBar>
    </div>
    )
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  filmLink: {
    flex:1,
    textAlign: "left",
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

}));
