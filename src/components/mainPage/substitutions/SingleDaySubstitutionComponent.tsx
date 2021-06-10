import { Box, Divider, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import { Substitution } from "ApiModel";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import React, { FunctionComponent } from "react";
import { capitalizeFirstLetter } from "../../../utils/string-uitls";

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
    },
    subBlock1: {
        margin: theme.spacing(0.2),
        // font: "bold",
    },
    subBlock2: {
        margin: theme.spacing(0.2),
    },
    singleBlock: {
        // backgroundColor: theme.palette.background.paper,
        margin: theme.spacing(1),
        padding: theme.spacing(0.2),
    }
}));

type SingleDaySubstitutionOwnProps = {
    dayOfWeek: Date,
    substitution: Substitution[],
};

type SingleDaySubstitutionProps = SingleDaySubstitutionOwnProps;

const SingleDaySubstitutionComponent: FunctionComponent<SingleDaySubstitutionProps> = ({ dayOfWeek, substitution }) => {
    const cssStyleClasses = useStyles();

    const formattedDate = capitalizeFirstLetter(format(dayOfWeek, 'cccc - dd MMM', { locale: pl }));
    console.log(`hey lad ${substitution}`);
    return <>
        <ListItem alignItems="flex-start">
            <ListItemText
                primary={formattedDate}
                secondary={
                    <List>
                        {(substitution && substitution.length > 0) ? substitution.map(sub =>
                            <ListItem>
                                <ListItemText className={cssStyleClasses.singleBlock}>
                                    <Box className={cssStyleClasses.subBlock1}>Lekcja {sub.time_signature}</Box>
                                    <Box className={cssStyleClasses.subBlock2}>{sub.comment}</Box>
                                </ListItemText>
                            </ListItem>
                        ) : <ListItem><ListItemText>Brak zastępstw</ListItemText></ListItem>}
                    </List>
                }
            />
        </ListItem>
        <Divider variant="inset" component="li" /></>;
}

export default SingleDaySubstitutionComponent;