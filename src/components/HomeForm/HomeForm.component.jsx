import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Card, CardContent }  from "@material-ui/core/"
import { useStyles } from "./HomeForm.style";
import './HomeForm.style.css'


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
                            InputProps={{
                                classes: {
                                    root: classes.root,
                                    notchedOutline: classes.notchedOutline
                                }}}
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

                <Button variant="contained" size="large" className={classes.submitButtonStyle}>Submit</Button>

            </form>
            </CardContent>
        </Card>
    );
}

