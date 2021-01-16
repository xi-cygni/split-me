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
    const [expenseList, setExpenseList] = useState([
        { name: '' }, { name: '' },
    ]);

    const handleEventNameChange = (event) => {
        setEventName(event.target.eventName);
    }

    //TODO can simplify it for participants and expenses handlers into one, add sth more than index

    /* PARTICIPANTS */

    const handleParticipantInput = (index, event) => {
        let values = [...participantList];
        values[index][event.target.name] = event.target.value;
        setParticipantList(values);
    }

    const handleAddParticipantField = () => {
        setParticipantList([...participantList, { name: '' }]);
    }

    const handleRemoveParticipantField = (index) => {
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

    /* EXPENSES */

    const handleExpenseInput = (index, event) => {
        let values = [...expenseList];
        values[index][event.target.name] = event.target.value;
        setExpenseList(values);

        console.log("list :", expenseList);
        console.log("index :", index);
        console.log("values :", values);
        console.log("event.target.name :", event.target.name);
        console.log("event.target.value :", event.target.value);

    }

    const handleAddExpenseField = () => {
        setExpenseList([...expenseList, { name: '' }]);
    }

    const handleRemoveExpenseField = (index) => {
        let values = [...expenseList];

        if (expenseList.length === 1) {
            values.splice(index, 1);
            setExpenseList(values);
            values = [{ name: '' }];
            setExpenseList(values);
        } else {
            values.splice(index, 1);
            setExpenseList(values);
        }
    }

    /* SUBMIT */

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const submitSplitMeProject = () => {
        Axios.post('http://localhost:3001/api/insert', {
            eventName: eventName,
            participantList: participantList,
            expenseList: expenseList
        });
    }

    return (
        <Card className={classes.cardStyle}>
            <CardContent className={classes.cardContentStyle}>

                <h1 className="introHeader">Fill in the form</h1>
                <form className={classes.root} onSubmit={handleSubmit}>
                    <div style={{ display: 'block' }}>
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
                    </div>

                    {/* PARTICIPANTS */}

                    <div style={{ display: 'inline-grid' }}>
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
                                    onChange={(event) => handleParticipantInput(index, event)}
                                />

                                <Button variant="text" className={classes.plusMinusButtonStyle} onClick={() => handleAddParticipantField()}>
                                    <AddIcon className={classes.iconStyle} />
                                </Button>
                                <Button variant="text" className={classes.plusMinusButtonStyle} onClick={() => handleRemoveParticipantField(index)}>
                                    <RemoveIcon className={classes.iconStyle} />
                                </Button>
                            </div>
                        ))}
                    </div>

                    {/* EXPENSES */}
                    <div style={{ display: 'inline-grid' }}>
                        {expenseList.map((expense, index) => (
                            <div key={index}>

                                <TextField
                                    label="Expense name"
                                    name="name"
                                    variant="outlined"
                                    value={expense.name}
                                    className={classes.textFieldStyle}
                                    InputProps={{
                                        classes: {
                                            root: classes.root,
                                            notchedOutline: classes.notchedOutline
                                        }
                                    }}
                                    onChange={(event) => handleExpenseInput(index, event)}
                                />

                                <Button variant="text" className={classes.plusMinusButtonStyle} onClick={() => handleAddExpenseField()}>
                                    <AddIcon className={classes.iconStyle} />
                                </Button>
                                <Button variant="text" className={classes.plusMinusButtonStyle} onClick={() => handleRemoveExpenseField(index)}>
                                    <RemoveIcon className={classes.iconStyle} />
                                </Button>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: 'block' }}>
                        <Button variant="contained"
                            size="large"
                            className={classes.submitButtonStyle}
                            onClick={submitSplitMeProject}
                        >Submit
                    </Button>
                    </div>

                </form>
            </CardContent>
        </Card>
    );
}

