import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({

    plusMinusButtonStyle: {
        color: "#D8BBEC",
        padding: "0",
        margin: "5px",
        marginTop: "10px"
    }, 

    cardStyle: {
        background: "#7a449e",
        margin: "5% 15%"
    }, 

    cardContentStyle: {

    },

    textFieldStyle: {
        margin: "5px",
        width: "50%",
        background: "#D8BBEC",
        borderRadius: "5px",
    }, 

    nameTextFieldStyle: {
        marginBottom: "20px",
        width: "30%",
        background: "#D8BBEC",
        borderRadius: "5px",
        textAlign: "left",
    },

    submitButtonStyle: {
        marginTop: "50px",
        marginBottom:"50px",
        background:"#3E254F",
        color: "#D8BBEC",
    },

    iconStyle: {
        height: "2em",
    },

    violetUnderline: {
        color: "#D8BBEC"
    }, 

    root: {
        '&:hover $notchedOutline': {
            borderColor: '#D8BBEC'
        },

        '$focused': {
            color: "#D8BBEC"
        },

        '&:hover $focused': {
            borderColor: '#D8BBEC'
        },

    },

    focused: {
        color: "#D8BBEC",   
    },

    filled: {
        color: "#D8BBEC",
    },
    notchedOutline: {
    },   
});

export {useStyles}