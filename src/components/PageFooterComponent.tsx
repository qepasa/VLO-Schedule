import { Container, makeStyles, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginRight: theme.spacing(2),
        flexShrink: 0,
    },
}));

const PageFooterComponent: FunctionComponent = () => {
    const classes = useStyles();
    return <footer className={classes.footer}>
        {/* <Container maxWidth="lg"> */}
        <Typography variant="caption" align="center" gutterBottom>
            <div style={{ float: "right" }}>

                <a target="_blank" href="https://github.com/Cloud11665/sabat.dev/tree/master/api">API rozkładu zajęć</a> stworzone przez <a target="_blank" href="https://github.com/Cloud11665">Cloud11665</a>
            </div>
        </Typography>
        {/* </Container> */}
    </footer>;
};

export default PageFooterComponent;