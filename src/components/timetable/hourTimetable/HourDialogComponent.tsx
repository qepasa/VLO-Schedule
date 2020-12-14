import React, { FunctionComponent } from "react";
import { Lesson } from 'ApiModel';
import { Button, CssBaseline, Dialog, DialogActions, DialogContent, DialogTitle, Divider, List, ListItem, ListItemText } from "@material-ui/core";
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

type LessonComponentProps = HourDialogComponentOwnProps;


const HourDialogComponent: FunctionComponent<LessonComponentProps> = ({ lessons, lessonNumber, dayIndex, onClose, open, currentWeekInterval }) => {
    if(!lessons) {
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
                    {lessons.map(lesson => (<>
                        <ListItem key={lesson.subject + lesson.teacher + lesson.color}>
                            <ListItemText
                                primary={`${lesson.subject}${lesson.group ? " - " + lesson.group : ""}`}
                                secondary={<>
                                    <div>Nauczyciel: {lesson.teacher}</div>
                                    <div>Sala: {lesson.classroom}</div>
                                </>}
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </>
                    ))}
                </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">Zamknij</Button>
            </DialogActions>
        </Dialog>
    </>
};

export default HourDialogComponent;