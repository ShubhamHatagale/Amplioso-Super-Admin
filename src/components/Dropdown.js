import React, { useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import { FormControlLabel, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
const Dropdown = ({ label, ...props }) => {
    const classes = useStyles();
    const [field, meta] = useField(props);
    const [select, setselect] = useState('');
    // const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setselect(event.target.value);
    };

    return (
        <div class="input-field col m6 s12 pad-r">
            <Select
                value={select}
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty + " abc"}
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="">
                    <em>Select Options</em>
                </MenuItem>
                <MenuItem value={10}>Manager</MenuItem>
                <MenuItem value={20}>Developer</MenuItem>
                <MenuItem value={30}>Business</MenuItem>
            </Select>
            <label>{label}</label>
        </div>
    )
}
export default Dropdown;