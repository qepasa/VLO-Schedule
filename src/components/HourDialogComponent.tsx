import React, { FunctionComponent } from "react";
import { Lesson } from 'ApiModel';
import { Button, CssBaseline, Dialog, DialogActions, DialogContent, DialogTitle, Divider, List, ListItem, ListItemText } from "@material-ui/core";
import { prependOnceListener } from "process";

type HourDialogComponentOwnProps = {
    lessons: Lesson[];
    lessonNumber: number;
    onClose: (() => void);
    open: boolean;
};

type LessonComponentProps = HourDialogComponentOwnProps;


const HourDialogComponent: FunctionComponent<LessonComponentProps> = ({ lessons, lessonNumber, onClose, open }) => {

    const handleClose = () => {
        onClose();
    };
    
    return <>
        <CssBaseline/>
        <Dialog onClose={handleClose} aria-labelledby="lessons-list-dialog" open={open} fullWidth>
            <DialogTitle id="lessons-list-dialog-title">Lekcja {lessonNumber}</DialogTitle>
            <DialogContent>
                <List>
                    {lessons.map(lesson => (<>
                        <ListItem key={lesson.subject + lesson.teacher + lesson.color}>
                            <ListItemText
                                primary={`Nazwa lekcji: ${lesson.subject}`}
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
                <Button onClick={handleClose} color="primary">Zamknij</Button>
            </DialogActions>
        </Dialog>
    </>
};

export default HourDialogComponent;