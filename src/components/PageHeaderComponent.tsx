import { Box, Button, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography, useMediaQuery } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { RouteComponentProps, useParams, withRouter } from "react-router-dom";
import SchoolIcon from '@material-ui/icons/School';
import { RootState } from "typesafe-actions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        margin: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        border: '1px',
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
    console.log(availableClasses);

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
            {matches ?
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                    endIcon={<SchoolIcon />}>
                    Wybierz klasę
            </Button>
                :
                <IconButton onClick={handleClick} color="primary" className={classes.iconButton}>
                    <SchoolIcon />
                </IconButton>
            }
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
    </Toolbar >
};

export default withRouter(connect(mapStateToProps)(PageHeaderComponent));