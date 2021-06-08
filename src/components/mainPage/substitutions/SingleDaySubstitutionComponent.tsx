import { Divider, ListItem, ListItemText, makeStyles, Typography } from "@material-ui/core";
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
                    <React.Fragment>
                        {/* <Typography
                            component="span"
                            variant="body2"
                            className={cssStyleClasses.inline}
                            color="textPrimary"
                        >
                            Ali Connors
              </Typography>
                        {" — I'll be in your neighborhood doing errands this…"} */}
                    </React.Fragment>
                }
            />
        </ListItem>
        {JSON.stringify(substitution)}
        <Divider variant="inset" component="li" /></>;
}

export default SingleDaySubstitutionComponent;