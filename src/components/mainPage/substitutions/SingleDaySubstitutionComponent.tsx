import { Divider, List, ListItem, ListItemText, makeStyles, Typography } from "@material-ui/core";
import { GetSubstitutionsResponse, Substitution } from "ApiModel";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
    },
}));

type SingleDaySubstitutionOwnProps = {
    dayOfWeek: Date,
    substitution: Substitution[],
};

type SingleDaySubstitutionProps = SingleDaySubstitutionOwnProps;

const SingleDaySubstitutionComponent: FunctionComponent<SingleDaySubstitutionProps> = ({ dayOfWeek, substitution }) => {
    const cssStyleClasses = useStyles();

    const formattedDate = format(dayOfWeek, 'EEEE - dd MMM', { locale: pl });
    console.log(`hey lad ${substitution}`);
    return <>
        <ListItem alignItems="flex-start">
            <ListItemText
                primary={formattedDate}
                secondary={
                    <List>
                        {(substitution && substitution.length > 0) ? substitution.map(sub =>
                            <ListItem>
                                <ListItemText>Lekcja {sub.time_signature}</ListItemText>
                                <ListItemText>{sub.comment}</ListItemText>
                            </ListItem>
                        ) : <ListItem><ListItemText>Brak zastępstw</ListItemText></ListItem>}
                    </List>
                }
            />
        </ListItem>
        <Divider variant="inset" component="li" /></>;
}

export default SingleDaySubstitutionComponent;