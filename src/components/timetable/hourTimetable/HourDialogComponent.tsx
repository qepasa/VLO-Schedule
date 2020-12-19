import React, { FunctionComponent, memo } from "react";
import { Lesson } from 'ApiModel';
import { Button, CssBaseline, Dialog, DialogActions, DialogContent, DialogTitle, Divider, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { pl } from "date-fns/locale";
import { format } from "date-fns";
import { capitalizeFirstLetter } from "../../../utils/string-uitls";

type HourDialogComponentOwnProps = {
    lessons: Lesson[];
    lessonNumber: number;
    dayIndex: number,
    onClose: (() => void);
    open: boolean;
    currentWeekInterval: Date[];
};

type HourDialogComponentProps = HourDialogComponentOwnProps;

const HourDialogComponent: FunctionComponent<HourDialogComponentProps> = memo(({ lessons, lessonNumber, dayIndex, onClose, open, currentWeekInterval }) => {
    if (!lessons) {
        return <div></div>;
    }
    const handleClose = () => {
        onClose();
    };
    return <>
        <CssBaseline />
        <Dialog onClose={handleClose} aria-labelledby="lessons-list-dialog" open={open} fullWidth>
            <DialogTitle id="lessons-list-dialog-title">
                {capitalizeFirstLetter(format(currentWeekInterval[dayIndex], "cccc", { locale: pl }))} - lekcja {lessonNumber}
            </DialogTitle>
            <DialogContent>
                <List>
                    {lessons.map(lesson => {
                        const key = lesson.subject + lesson.teacher + lesson.color + lesson.group;
                        return (<>
                            <ListItem key={key}>
                                <ListItemText
                                    primary={`${lesson.subject}${lesson.group ? " - " + lesson.group : ""}`}
                                    secondary={<>
                                        <Typography component="a" variant="body2" key={key+"Teacher"}>Nauczyciel: {lesson.teacher}</Typography>
                                        <br />
                                        <Typography component="a" variant="body2" key={key+"Classroom"}>Sala: {lesson.classroom}</Typography>
                                    </>}
                                    key={key+"ListItemText"}
                                />
                            </ListItem>
                            <Divider variant="middle" component="li" key={key+"Divider"} />
                        </>)
                    })}
                </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">Zamknij</Button>
            </DialogActions>
        </Dialog>
    </>
});

export default HourDialogComponent;