import React from 'react'
import CustonBtn from './CustonBtn'
import logo from '../logo.svg'
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles({
    bar: {
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        '@media (max-width: 780px)': {
            flexDirection: "row"
        }
    },

    menuItem: {
        cursor: "pointer",
        flexGrow: 1,
        "&:hover": {
            color: "#5B6770"
        },
        '@media (max-width: 780px)': {
            paddingBottom: "1rem"
        }
    }
})

export default function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="#B4B5DF" className={classes.bar}>
            <Typography variant="h6" className={classes.menuItem}>
                About Me
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Projects
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Contact Me
            </Typography>
            <CustonBtn txt="Button"/>
        </Toolbar>
    )
}
