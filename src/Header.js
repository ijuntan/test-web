import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Grid container style={{backgroundColor: '#738adb', height: '3.5em'}} spacing = {0} alignItems="center" justify="space-evenly"> 
                <Button style={{color: 'white'}} component = {Link} to = '/dashboard'> 
                    Home 
                </Button>
                <Button style={{color: 'white'}} component = {Link} to = '/calendar'> 
                    Calendar
                </Button>
                <Button style={{color: 'white'}} component = {Link} to = '/tasks'> 
                    Tasks
                </Button>
                <Button style={{color: 'white'}} component = {Link} to = '/classroom'> 
                    Classroom
                </Button>
                <Button style={{color: 'white'}} component = {Link} to = '/account'> 
                    Account
                </Button>
            </Grid>
        </div>
    )
}

export default Header;
