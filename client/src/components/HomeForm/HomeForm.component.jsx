import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Card, CardContent } from "@material-ui/core/"
import { useStyles } from "./HomeForm.style";
import './HomeForm.style.css'


export default function HomeForm() {

    const classes = useStyles();

    const [eventName, setEventName] = useState('');
    const [participantList, setParticipantList] = useState([
        { name: '' }, { name: '' },
    ]);

    const handleChangeInput = (index, event) => {
        const values = [...participantList];
        values[index][event.target.name] = event.target.value;
        setParticipantList(values);
    }

    const handleAddField = () => {
        setParticipantList([...participantList, { name: '' }]);
    }

    const handleRemoveField = (index) => {
        let values = [...participantList];

        if (participantList.length === 1) {
            values.splice(index, 1);
            setParticipantList(values);
            values = [{ name: '' }];
            setParticipantList(values);
        } else {
            values.splice(index, 1);
            setParticipantList(values);
        }
    }

    const handleEventNameChange = (event) => {
        setEventName(event.target.eventName);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const submitSplitMeProject = () => {
        Axios.post('http://localhost:3001/api/insert', {
            eventName: eventName,
            participantList: participantList
        });
    }



    return (
        <Card className={classes.cardStyle}>
            <CardContent className={classes.cardContentStyle}>
                <h1 className="introHeader">Fill in the form</h1>

                <form className={classes.root} onSubmit={handleSubmit}>

                    <TextField
                        label="Event name"
                        name="eventName"
                        variant="outlined"
                        className={classes.textFieldStyle, classes.nameTextFieldStyle}
                        InputProps={{
                            classes: {
                                root: classes.root,
                                notchedOutline: classes.notchedOutline
                            }
                        }}
                        onChange={(event) => handleEventNameChange(event)}
                    />

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
                                    }
                                }}
                                onChange={(event) => handleChangeInput(index, event)}
                            />

                            <Button variant="text" className={classes.plusMinusButtonStyle} onClick={() => handleAddField()}>
                                <AddIcon className={classes.iconStyle} />
                            </Button>
                            <Button variant="text" className={classes.plusMinusButtonStyle} onClick={() => handleRemoveField(index)}>
                                <RemoveIcon className={classes.iconStyle} />
                            </Button>
                        </div>
                    ))}

                    <Button variant="contained"
                        size="large"
                        className={classes.submitButtonStyle}
                        onClick={submitSplitMeProject}
                    >Submit
                    </Button>

                </form>
            </CardContent>
        </Card>
    );
}

