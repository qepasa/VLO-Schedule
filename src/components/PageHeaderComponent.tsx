import { Badge, Box, Button, IconButton, makeStyles, Menu, MenuItem, Toolbar, Tooltip, Typography, useMediaQuery } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { RouteComponentProps, useParams, withRouter } from "react-router-dom";
import SchoolIcon from '@material-ui/icons/School';
import { RootState } from "typesafe-actions";
import { connect } from "react-redux";
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        margin: theme.spacing(1),
        flex: 1,
        [theme.breakpoints.down('md')]: {
            fontSize: '125%',
        }
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const mapStateToProps = (state: RootState) => ({
    availableClasses: state.classes.classes,
});

type PageHeaderProps = ReturnType<typeof mapStateToProps> & RouteComponentProps;

type HeaderParams = {
    classParam: string,
};

const PageHeaderComponent: FunctionComponent<PageHeaderProps> = ({ availableClasses, history }) => {
    const matches = useMediaQuery('(min-width:900px)');
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    // console.log(availableClasses);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuItemClicked = (cla: string) => (() => {
        handleClose();
        history.push(`${cla}`);
    });

    const classes = useStyles();
    const classParam = useParams<HeaderParams>().classParam;
    return <Toolbar className={classes.toolbar}>
        <Box alignSelf="left">
            <Button
                className={classes.sectionDesktop}
                variant="contained"
                color="primary"
                onClick={handleClick}
                endIcon={<SchoolIcon />}>
                Wybierz klasę
            </Button>
            <IconButton onClick={handleClick} color="primary" className={classes.sectionMobile}>
                <SchoolIcon />
            </IconButton>
            <Menu
                id="classes-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: '50vh',
                    }
                }}>
                {availableClasses.map(cla => <MenuItem key={cla} onClick={menuItemClicked(cla)} selected={cla === classParam}>{cla}</MenuItem>)}
            </Menu>
        </Box>
        <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
        >
            Rozkład klasy {classParam}
        </Typography>
        <div className={classes.sectionDesktop}>
            <Tooltip title={"Wyślij do nas maila!"} aria-label={"send-feedback-tooltip"} arrow>
                <IconButton aria-label="send-feedback" color="inherit" component="a" href="mailto:abababa@babababa.com?cc=babababa@babababa.com&subject=Zg%C5%82o%C5%9B%20B%C5%82%C4%85d" target="_blank">
                    <MailIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title={"Kod. PogU"} aria-label={"github-repo-tooltip"} arrow>
                <IconButton aria-label="github-repo" color="inherit" component="a" href="https://github.com/qepasa/VLO-Schedule" target="_blank">
                    <GitHubIcon />
                </IconButton>
            </Tooltip>
        </div>
    </Toolbar >
};

export default withRouter(connect(mapStateToProps)(PageHeaderComponent));