import { Link, makeStyles, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        flexShrink: 0,
    },
    footerText: {
        paddingRight: theme.spacing(1),
        float: 'right',
    },
}));

const PageFooterComponent: FunctionComponent = () => {
    const classes = useStyles();
    return <footer className={classes.footer}>
        <Typography variant="caption" align="center" gutterBottom>
            <div className={classes.footerText}>
                <Link target="_blank" href="https://github.com/Cloud11665/sabat.dev/tree/master/api" color="secondary">API rozkładu zajęć
                </Link> stworzone przez <Link target="_blank" href="https://github.com/Cloud11665" color="secondary">Cloud11665
                </Link>, <Link target="_blank" href="https://github.com/qepasa/VLO-Schedule" color="secondary">frontend
                </Link>przez
                <Link target="_blank" href="https://github.com/qepasa" color="secondary">qepasa
                </Link>
            </div>
        </Typography>
    </footer>;
};

export default PageFooterComponent;
