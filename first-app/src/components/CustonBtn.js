import React from 'react'
import {Button, withStyles} from '@material-ui/core'

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0,
        background: "#0093B2",
        color: "#fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #5B6770",
        transition: "backgroud .3s, border-color .3s, color .3s",
        "&:hover": {
            backgroundColor: "#0093B2"
        },
    },

    label: {
        textTransform: 'capitalize',
    },
})(Button);

export default function CustonBtn(props) {
    return (
        <div>
            <StyledButton variant="contained">{props.txt}</StyledButton>
        </div>
    )
}
