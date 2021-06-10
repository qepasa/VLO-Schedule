import { Box, Button, IconButton, makeStyles } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { nextWeek, previousWeek, setDate } from "../../../store/date/actions";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    textWrapper: {
        height: '4vh',
        width: '100%'
    },
    textSection: {
        float: 'left',
        height: 'inherit',
        margin: theme.spacing(1),
    },
    switchViewsButton: {
        float: 'right',
        height: 'inherit',
        margin: theme.spacing(1),
    },
}));

const dispatchProps = {
    nextWeek: nextWeek,
    prevWeek: previousWeek,
    setDate: setDate,
};

type NavbarOwnProps = {
    navigationButtonText: string,
    onNavButtonClick: () => void;
};

type NavbarProps = NavbarOwnProps & typeof dispatchProps;

const Navbar: FunctionComponent<NavbarProps> = ({ navigationButtonText, onNavButtonClick, nextWeek, prevWeek, setDate }) => {
    const cssStyleClasses = useStyles();

    return <Box className={cssStyleClasses.textWrapper}>
        <Box className={cssStyleClasses.textSection}>
            <IconButton size="small" onClick={() => prevWeek()}>
                <ArrowBackIosIcon fontSize="small"></ArrowBackIosIcon>
            </IconButton>
            <Button size="small" variant="outlined" onClick={() => setDate(0)}>Dzisiaj</Button>

            <IconButton size="small" onClick={() => nextWeek()}>
                <ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
            </IconButton>
        </Box>

        <Box className={cssStyleClasses.switchViewsButton}>
            <IconButton size="small" style={{ visibility: "hidden" }}>
                <ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
            </IconButton>
            <Button size="small" variant="outlined" onClick={onNavButtonClick}>{navigationButtonText}</Button>
        </Box>
    </Box>;
}

export default connect(null, dispatchProps)(Navbar);