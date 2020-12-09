import React, { useState } from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { InputBase, Card, CardContent }  from "@material-ui/core/"
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { NoEncryption } from '@material-ui/icons';


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
        borderRadius: "5px"
    }, 

    submitButtonStyle: {
        marginTop: "30px"
    },

    iconStyle: {
        height: "2em",
    },

    violetUnderline: {
        color: "#D8BBEC"
    }
});


export default function HomeForm() {

    const classes = useStyles();

    const [participantList, setParticipantList] = useState([
        { name: '' }, { name: ''},
    ]);

    const handleChangeInput = (index, event) => {
        const values = [...participantList];
        values[index][event.target.name] = event.target.value;
        setParticipantList(values);
    }

    const handleAddField = () => {
        setParticipantList([...participantList, { name: ''}]);
    }

    const handleRemoveField = (index) => {
        let values = [...participantList];

        if(participantList.length === 1) {
            values.splice(index, 1);
            setParticipantList(values);
            values = [{ name: ''}];
            setParticipantList(values);
        } else {
            values.splice(index, 1);
            setParticipantList(values);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <Card className={classes.cardStyle}>
            <CardContent className={classes.cardContentStyle}>
            <h1 className="introHeader">Add the participants</h1>

            <form className={classes.root} onSubmit={handleSubmit}>
                {participantList.map((participant, index) => (
                    <div key={index}>
                
                        <TextField
                            label="Participant name"
                            name="name"
                            variant="outlined"
                            value={participant.name}
                            className={classes.textFieldStyle}
                            InputProps={{ }}
                            onChange={(event) => handleChangeInput(index, event)}
                        />
                     

                        <Button variant="text" className={classes.plusMinusButtonStyle} onClick={() => handleAddField()}>
                            <AddIcon className={classes.iconStyle}/>
                        </Button>
                        <Button variant="text" className={classes.plusMinusButtonStyle} onClick={() => handleRemoveField(index)}>
                            <RemoveIcon className={classes.iconStyle} />
                        </Button>
                    </div>
                ))}


                <Button variant="contained" className={classes.submitButtonStyle} >Submit</Button>
                

            </form>
            </CardContent>
        </Card>
    );
}

