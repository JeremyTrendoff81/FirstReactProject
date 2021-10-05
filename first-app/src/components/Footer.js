import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram'
import GithubIcon from '@material-ui/icons/GitHub'

export default function Footer() {
    return (
        <BottomNavigation>
            <BottomNavigationAction label="Instagram" icon={<InstagramIcon style={{fill: "#512D6D"}}/>}/>
            <BottomNavigationAction label="GitHub" icon={<GithubIcon style={{fill: "#512D6D"}}/>}/>
        </BottomNavigation>
    )
}
