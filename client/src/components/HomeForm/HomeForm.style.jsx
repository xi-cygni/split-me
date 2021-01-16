import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({

    plusMinusButtonStyle: {
        color: "#9fc7ac",
        padding: "0",
        margin: "1px",
        marginTop: "10px",
    }, 

    cardStyle: {
        background: "#7ba685",
        margin: "5% 15%",
    }, 

    cardContentStyle: {

    },

    textFieldStyle: {
        margin: "5px",
        width: "50%",
        background: "#9fc7ac",
        borderRadius: "5px",
    }, 

    nameTextFieldStyle: {
        marginBottom: "20px",
        width: "30%",
        background: "#9fc7ac",
        borderRadius: "5px",
        textAlign: "left",
    },

    submitButtonStyle: {
        marginTop: "50px",
        marginBottom:"50px",
        background:"#474747",
        color: "#9fc7ac",
        '&:hover': {
            backgroundColor:"#525252"
        }
    },

    iconStyle: {
        height: "2em",
    },

    violetUnderline: {
        color: "#9fc7ac"
    }, 

    root: {
        
        '&:hover $notchedOutline': {
            border: "none"
        },

        '$focused': {
            color: "#9fc7ac",
        },

        '&:hover $focused': {
            border: "none"
        },

        '&:hover': {
            border: "none"
        },
    },
        
});

export {useStyles}