import { makeStyles, Toolbar, Typography } from "@material-ui/core";
import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        margin: theme.spacing(1),
        flex: 1,
    },
}));

type HeaderParams = {
    classParam: string,
};


const PageHeaderComponent: FunctionComponent = () => {
    const classes = useStyles();
    const classParam = useParams<HeaderParams>().classParam;
    return <Toolbar className={classes.toolbar}>
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
    </Toolbar>
};

export default PageHeaderComponent;