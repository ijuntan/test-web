import React, { useState } from 'react'
import { Grid, Fab, Dialog, Paper, TextField, IconButton, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Add, Block, Close } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    addTasks: {
        margin : "2em 0 0 85em",
    },
    dialog:{
        backgroundColor: "#36393E",
        height:'100%'
    },
    header: {
        backgroundColor: '#738adb', 
        height:'3.5em'
    },
    closeButton: {
        color: 'white',
        margin: '0.2em 0 0 0.5em'
    },
    saveButton: {
        width:'10em',
        marginTop:'2em'
    },
    titleText:{
        color:'white',
        margin:'1em 0 1em 0'
    },
    gridContent:{
        padding: '0 10em 0 10em',
    },
    paperGrid:{
        padding: '2em',
        height:'25em'
    },
    inputGrid:{
        marginTop:'1.2em',
        width:'90%'
    }
}));


function Tasks(){
    const classes = useStyles();
    const [openDialog, setOpenDialog] = useState(false);

    return(
        <div>

            {/* Add Tasks Dialog */}
            <Dialog fullScreen open={openDialog}>
                <Grid container className = {classes.dialog}> 
                    <Grid 
                        item xs={12}
                        className = {classes.header} 
                        alignItems = "center" 
                    > 
                        <IconButton 
                            className = {classes.closeButton}
                            onClick = { () => setOpenDialog(false) }
                        >
                            <Close/>
                        </IconButton>
                    </Grid>

                    <Grid
                        item xs={12}
                        className = {classes.titleText}
                    >
                        <Typography
                            variant = 'h3'
                            align = 'center'
                        >
                            ADD TASKS
                        </Typography>
                    </Grid>
                    
                    <Grid 
                        item xs = {12} 
                        alignItems = "center"
                        className = {classes.gridContent}
                    >
                        <Paper className = {classes.paperGrid}>
                            <Grid container direction = "column" spacing={1} alignItems = "center">
                                <TextField
                                    className = {classes.inputGrid}
                                    required
                                    label="Name"
                                    variant="filled"
                                />
                                <TextField
                                    className = {classes.inputGrid}
                                    required
                                    label="Class"
                                    variant="filled"
                                />
                                <TextField
                                    className = {classes.inputGrid}
                                    required
                                    label="Due Date"
                                    variant="filled"
                                />
                                <TextField
                                    className = {classes.inputGrid}
                                    multiline
                                    rows={3}
                                    label="Description"
                                    variant="filled"
                                />
                                <Button 
                                    className = {classes.saveButton}
                                    onClick = { () => setOpenDialog(false) }
                                >
                                    Save
                                </Button>
                            </Grid>
                        </Paper>
                    </Grid>
                        
                </Grid>
                
            </Dialog>

            <Grid>
                
            </Grid>

            <Fab
                variant = "extended"
                size = "large"
                className = { classes.addTasks }
                onClick = { () => setOpenDialog(true) }
            >
                <Add />
                Add Tasks
            </Fab>

        </div>
    )
}

export default Tasks;