import React, { useContext } from 'react';
import clsx from 'clsx';
import '../assets/SuperAdmin/css/animate.css'
import '../assets/SuperAdmin/css/custom.css'
import '../assets/SuperAdmin/css/dashboard-modern.css'
import '../assets/SuperAdmin/css/materialize.min.css'
import '../assets/SuperAdmin/css/style.min.css'
import '../assets/SuperAdmin/css/styles.css'
import logo from "../assets/SuperAdmin/images/logo.png";
import amplioso from "../assets/SuperAdmin/images/logo-big.png";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Footer from './Footer';
import NestedList from './sidebarRoutes';
import { ChevronRightOutlined, Person, RadioButtonChecked, RadioButtonUnchecked } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { UserContext } from "../App";

function Copyright() {
    return (
        <Footer />
    );
}

const drawerWidth = 288;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 12,
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: '',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        width: `calc(100% - 72px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        // paddingTop: theme.spacing(4),
        // paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        background: "#eeeeee"
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function NewSidebar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    // const { state, dispatch } = useContext(UserContext)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logOut = () => {
        localStorage.clear()
        // dispatch({ type: "CLEAR" })
        history.push("/")
    }
    const history = useHistory()
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(prevCheck => !prevCheck);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        {/* <ChevronRightOutlined /> */}
                        {/* <MenuIcon /> */}
                        {/* <img className="logo_close" src={logo} onClick={handleDrawerOpen} />
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        </Typography> */}
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    </Typography>
                    <IconButton color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        {/* <Badge badgeContent="" color="secondary"> */}
                        <Person style={{ color: "#fff" }} />
                        {/* </Badge> */}
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={logOut}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                onMouseEnter={handleDrawerOpen}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <div className="logopadding">
                        <img className="logo" src={logo} />
                        <img className="logo1" src={amplioso} />
                    </div>
                    <IconButton onClick={handleDrawerClose}>
                        {/* <ChevronLeftIcon /> */}
                        {open ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
                    </IconButton>
                </div>
                <NestedList />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                {props.data}
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box >
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div >
    );
}