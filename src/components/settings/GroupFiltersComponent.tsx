import { createStyles, List, ListItem, ListItemText, ListSubheader, makeStyles, Theme } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { RootState } from "typesafe-actions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            minWidth: '30vw',
            backgroundColor: theme.palette.background.paper,
            maxHeight: '70vh',
            overflow: 'auto',
        },
        listSection: {
            backgroundColor: 'inherit',
        },
        ul: {
            backgroundColor: 'inherit',
            padding: 0,
        },
    }));

const mapStateToProps = (state: RootState) => ({
    groups: state.schedule.groups,
});

type GroupFiltersProps = ReturnType<typeof mapStateToProps>;

const GroupFiltersComponent: FunctionComponent<GroupFiltersProps> = ({ groups }) => {
    const cssClasses = useStyles();
    console.log(groups);
    console.log(Object.keys(groups));
    return <List subheader={<li />} className={cssClasses.root}>
        {Object.keys(groups).map(lessonName =>
            <li key={`section-${lessonName}`} className={cssClasses.listSection}>
                <ul className={cssClasses.ul}>
                    <ListSubheader>{lessonName}</ListSubheader>
                    {groups[lessonName].map(groupForLesson =>
                        <ListItem key={`item-${lessonName}-${groupForLesson}`}>
                            <ListItemText primary={groupForLesson} />
                        </ListItem>
                    )}
                </ul>
            </li>
        )}
    </List>;
}

export default connect(mapStateToProps)(GroupFiltersComponent);