import { Button, Checkbox, createStyles, List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles, Theme } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { RootState } from "typesafe-actions";
import { connect } from "react-redux";
import { Lesson } from "ApiModel";
import { addGroup, removeGroup } from "../../store/preferences/actions";
import { getFiltersForCurrentClass } from "../../store/root-selectors";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            // minWidth: '30vw',
            backgroundColor: theme.palette.background.paper,
            // minHeight: '10vh',
            // maxHeight: '70vh',
            height: 'inherit',
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
    selectedGroups: getFiltersForCurrentClass(state),
    currentClass: state.preferences.class,
});

const dispatchProps = {
    addGroup: addGroup,
    removeGroup: removeGroup,
};

type GroupFiltersProps = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const GroupFiltersComponent: FunctionComponent<GroupFiltersProps> = ({ groups, selectedGroups, currentClass, addGroup, removeGroup }) => {
    const cssClasses = useStyles();

    const handleToggle = (lessonName: string, lesson: Lesson) => () => {
        const isActive = selectedGroups[lessonName].find(val => val.group === lesson.group) !== undefined;

        if (isActive) {
            removeGroup(lesson, currentClass);
        } else {
            addGroup(lesson, currentClass);
        }
    }

    return <>
        <List subheader={<li />} className={cssClasses.root}>
            {Object.keys(groups).map(lessonName =>
                <li key={`section-${lessonName}`} className={cssClasses.listSection}>
                    <ul className={cssClasses.ul}>
                        <ListSubheader>{lessonName}</ListSubheader>
                        {groups[lessonName].map(lesson =>
                            <ListItem key={`item-${lessonName}-${lesson.group}`} dense button onClick={handleToggle(lessonName, lesson)}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={selectedGroups[lessonName].find(val => val.group === lesson.group) !== undefined}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                </ListItemIcon>
                                <ListItemText primary={lesson.group} secondary={`Nauczyciel: ${lesson.teacher}`} />
                            </ListItem>
                        )}
                    </ul>
                </li>
            )}
        </List>
    </>;
}

export default connect(mapStateToProps, dispatchProps)(GroupFiltersComponent);