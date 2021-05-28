import { Box, Button, IconButton, makeStyles, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@material-ui/core";
import React, { FunctionComponent, useState } from "react";
import Skeleton from '@material-ui/lab/Skeleton';
import { RouteComponentProps, useParams, withRouter } from "react-router-dom";
import SchoolIcon from '@material-ui/icons/School';
import { RootState } from "typesafe-actions";
import { connect } from "react-redux";
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import { setTheme } from "../store/preferences/actions";
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { ClassesStatus } from "ApiModel";
import ErrorIcon from '@material-ui/icons/Error';
import MoreIcon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsDialogComponent from "./settings/SettingsDialogComponent";
import { addWeeks, endOfWeek, format, lightFormat, startOfWeek } from "date-fns";
import { pl } from "date-fns/locale";

const getThemeIcon = (theme: string, themeClicked: () => void) => {
    if (theme === 'light') {
        return <IconButton aria-label="theme-button" color="inherit" onClick={themeClicked}>
            < NightsStayIcon />
        </IconButton>;
    } else {
        return <IconButton aria-label="theme-button" color="inherit" onClick={themeClicked}>
            < WbSunnyIcon />
        </IconButton>;
    }
}

const getClassesMenuContent = (
    availableClasses: string[], classesStatus: ClassesStatus, menuItemClicked: (c: string) => (() => void), classParam: string, skeletonStyle: string,
) => {
    if (classesStatus.loading) {
        return <>
            <Skeleton width="3vw" className={skeletonStyle} animation="wave" />
            <Skeleton width="3vw" className={skeletonStyle} animation="wave" />
            <Skeleton width="3vw" className={skeletonStyle} animation="wave" />
        </>
    } else if (classesStatus.error) {
        return <div>
            <ErrorIcon color="error" />
            <Typography variant="caption" color="error">
                Wystąpił błąd podczas ładowania klas. Odśwież stronę.
            </Typography>
        </div>
    }
    return <div>
        {availableClasses.map(cla => <MenuItem key={cla} onClick={menuItemClicked(cla)} selected={cla === classParam}>{cla}</MenuItem>)}
    </div>;
}

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
    skeletonStyle: {
        margin: theme.spacing(1),
    }
}));

const mapStateToProps = (state: RootState) => ({
    availableClasses: state.classes.classes,
    classesStatus: state.classes.isLoadingClasses,
    preferences: state.preferences,
    currentDateOffset: state.date
});

const dispatchProps = {
    setTheme: setTheme,
};

type PageHeaderProps = ReturnType<typeof mapStateToProps> & typeof dispatchProps & RouteComponentProps;

type HeaderParams = {
    classParam: string,
};

const PageHeaderComponent: FunctionComponent<PageHeaderProps> = ({ availableClasses, classesStatus, preferences, currentDateOffset, setTheme, history }) => {
    const currentDate = addWeeks(new Date(), currentDateOffset);
    const cssStyleClasses = useStyles();
    const classParam = useParams<HeaderParams>().classParam;
    const [selectClassAnchorEl, setSelectClassAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
    const [settingsOpen, setSettingsOpen] = useState<boolean>(false);

    const selectClassOpen = Boolean(selectClassAnchorEl);
    const mobileOpen = Boolean(mobileMoreAnchorEl);

    const handleSelectClassClick = (event: React.MouseEvent<HTMLElement>) => {
        setSelectClassAnchorEl(event.currentTarget);
    };

    const handleSelectClassClose = () => {
        setSelectClassAnchorEl(null);
    };

    const selectClassMenuItemClicked = (cla: string) => (() => {
        handleSelectClassClose();
        history.push(`${cla}`);
    });

    const themeClicked = () => {
        if (preferences.theme === "dark") {
            setTheme("light")
        } else {
            setTheme("dark");
        }
    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    }
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleSettingsOpen = () => {
        setSettingsOpen(true);
    };

    const handleSettingsClose = () => {
        setSettingsOpen(false);
    };

    const themeIcon = getThemeIcon(preferences.theme, themeClicked);
    const feedbackIcon = (
        <Tooltip title={"Wyślij do nas maila!"} aria-label={"send-feedback-tooltip"} arrow>
            <IconButton aria-label="send-feedback" color="inherit" component="a" href="mailto:feedback.vlorocks@gmail.com?subject=Zg%C5%82o%C5%9B%20B%C5%82%C4%85d" target="_blank">
                <MailIcon />
            </IconButton>
        </Tooltip>);
    const githubIcon = (
        <Tooltip title={"Kod na Githubie"} aria-label={"github-repo-tooltip"} arrow>
            <IconButton aria-label="github-repo" color="inherit" component="a" href="https://github.com/qepasa/VLO-Schedule" target="_blank">
                <GitHubIcon />
            </IconButton>
        </Tooltip>);
    const settingsIcon = (
        <>
            <IconButton aria-label="settings-button" color="inherit" onClick={handleSettingsOpen}>
                <SettingsIcon />
            </IconButton>
            <SettingsDialogComponent open={settingsOpen} onClose={handleSettingsClose} />
        </>
    );

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={mobileOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                {themeIcon}
            </MenuItem>
            <MenuItem>
                {settingsIcon}
            </MenuItem>
            <MenuItem>
                {feedbackIcon}
            </MenuItem>
            <MenuItem>
                {githubIcon}
            </MenuItem>
        </Menu>
    );

    const currentStartOfWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
    const currentEndOfWeek = endOfWeek(currentDate, { weekStartsOn: 1 });

    return <Toolbar className={cssStyleClasses.toolbar}>
        <Box alignSelf="left">
            <Button
                className={cssStyleClasses.sectionDesktop}
                variant="contained"
                color="primary"
                onClick={handleSelectClassClick}
                endIcon={<SchoolIcon />}>
                Wybierz klasę
            </Button>
            <IconButton onClick={handleSelectClassClick} color="primary" className={cssStyleClasses.sectionMobile}>
                <SchoolIcon />
            </IconButton>
            <Menu
                id="classes-menu"
                anchorEl={selectClassAnchorEl}
                keepMounted
                open={selectClassOpen}
                onClose={handleSelectClassClose}
                PaperProps={{
                    style: {
                        maxHeight: '70vh',
                    }
                }}>
                {getClassesMenuContent(availableClasses, classesStatus, selectClassMenuItemClicked, classParam, cssStyleClasses.skeletonStyle)}
            </Menu>
        </Box>
        <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={cssStyleClasses.toolbarTitle}
        >
            Rozkład klasy {classParam} ({format(currentStartOfWeek, 'dd MMM', { locale: pl }) + ' - ' + format(currentEndOfWeek, 'dd MMM', { locale: pl })})
        </Typography>
        <div className={cssStyleClasses.sectionDesktop}>
            {themeIcon}
            {settingsIcon}
            {feedbackIcon}
            {githubIcon}
        </div>
        <div className={cssStyleClasses.sectionMobile}>
            <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
            >
                <MoreIcon />
            </IconButton>
            {renderMobileMenu}
        </div>
    </Toolbar >
};

export default withRouter(connect(mapStateToProps, dispatchProps)(PageHeaderComponent));