import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DvrIcon from '@material-ui/icons/Dvr';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function NestedList() {
    const history = useHistory()
    const classes = useStyles();
    const [open1, setOpen1] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick1 = () => {
        setOpen1(!open1);
    };

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                </ListSubheader>
            }
            className={classes.root}
        >
            <div onClick={() => { history.push("/") }}>
                <ListItem button >
                    <ListItemIcon>
                        <DvrIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
            </div>
            <div onClick={() => { history.push("/user/view") }}>
                <ListItem button>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="SuperAdmin Users" />
                </ListItem>
            </div>
            {/* <div >
                <ListItem button onClick={handleClick1}>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Admin Users" />
                    {open1 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
            </div>
            <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <div onClick={() => { history.push("/user/view") }}>
                        <ListItem button className={classes.nested} >
                            <ListItemIcon className="icon">
                            </ListItemIcon>
                            <ListItemText primary="User" />
                        </ListItem>
                    </div>
                    <div onClick={() => { history.push("/role/view") }} >
                        <ListItem button className={classes.nested} >
                            <ListItemIcon className="icon">
                            </ListItemIcon>
                            <ListItemText primary="Role" />
                        </ListItem>
                    </div>
                </List>
            </Collapse> */}
            <div >
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <i className="material-icons">inventory</i>
                    </ListItemIcon>
                    <ListItemText primary="Masters" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
            </div>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <div onClick={() => { history.push("/countries/view") }}>
                        <ListItem button className={classes.nested} >
                            {/* <ListItemIcon className="icon">
                                <RadioButtonUncheckedIcon />
                            </ListItemIcon> */}
                            <ListItemText primary="Countries" />
                        </ListItem>
                    </div>
                    <div onClick={() => { history.push("/employee/view") }} >
                        <ListItem button className={classes.nested} >
                            {/* <ListItemIcon className="icon">
                                <RadioButtonUncheckedIcon />
                            </ListItemIcon> */}
                            <ListItemText primary="Employee Strength" />
                        </ListItem>
                    </div>
                    <div onClick={() => { history.push("/averageemployee/view") }}>
                        <ListItem button className={classes.nested} >
                            {/* <ListItemIcon className="icon">
                                <RadioButtonUncheckedIcon />
                            </ListItemIcon> */}
                            {/* <i class="material-icons">manage_search </i> */}
                            <ListItemText primary="Average Employee Annual Compensation" />
                        </ListItem>
                    </div>
                    <div onClick={() => { history.push("/feedback/view") }}>
                        <ListItem button className={classes.nested} >
                            {/* <ListItemIcon className="icon">
                                <RadioButtonUncheckedIcon />
                            </ListItemIcon> */}
                            <ListItemText primary="Feedback Frequency" />
                        </ListItem>
                    </div>
                    <div onClick={() => { history.push("/sector/view") }} >
                        <ListItem button className={classes.nested} >
                            {/* <ListItemIcon className="icon">
                                <RadioButtonUncheckedIcon />
                            </ListItemIcon> */}
                            <ListItemText primary="Sector" />
                        </ListItem>
                    </div>
                    <div onClick={() => { history.push("/year_of_experience/view") }} >
                        <ListItem button className={classes.nested} >
                            {/* <ListItemIcon className="icon">
                                <RadioButtonUncheckedIcon />
                            </ListItemIcon> */}
                            <ListItemText primary="Year Of Experience" />
                        </ListItem>
                    </div>
                </List>
            </Collapse>
            <div onClick={() => { history.push("/companies/view") }}>
                <ListItem button  >
                    <ListItemIcon>
                        <i className="material-icons">domain</i>
                    </ListItemIcon>
                    <ListItemText primary="Companies" />
                </ListItem>
            </div>
            <div onClick={() => { history.push("/package/view") }} >
                <ListItem button  >
                    <ListItemIcon>
                        <i className="material-icons">card_travel</i>
                    </ListItemIcon>
                    <ListItemText primary="Packages" />
                </ListItem>
            </div>
            <div onClick={() => { history.push("/coupon/view") }}>
                <ListItem button  >
                    <ListItemIcon>
                        <i className="material-icons">insert_drive_file</i>
                    </ListItemIcon>
                    <ListItemText primary="Coupons" />
                </ListItem>
            </div>
            <div onClick={() => { history.push("/") }}>
                <ListItem button  >
                    <ListItemIcon>
                        <i className="material-icons">table_chart</i>
                    </ListItemIcon>
                    <ListItemText primary="Surveys Reports" />
                </ListItem>
            </div>
            <div onClick={() => { history.push("/") }}>
                <ListItem button  >
                    <ListItemIcon>
                        <i className="material-icons">paid</i>
                    </ListItemIcon>
                    <ListItemText primary="Payment" />
                </ListItem>
            </div>
        </List>
    );
}