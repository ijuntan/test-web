import React from 'react'
import { Grid } from '@material-ui/core'

function Header() {
    return (
        <div>
            <Grid container style={{backgroundColor: '#738adb', height: '3.5em'}} spacing = {0}> 
                <Grid item xs={7}/>
                <Grid item xs={1}>
                    Home
                </Grid>
                <Grid item xs={1}>
                    Account
                </Grid>
                <Grid item xs={1}>
                    Account
                </Grid>
                <Grid item xs={1}>
                    Account
                </Grid>
                <Grid item xs={1}>
                    Account
                </Grid>
            </Grid>
        </div>
    )
}

export default Header;
