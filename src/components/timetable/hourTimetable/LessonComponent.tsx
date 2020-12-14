import { makeStyles, Typography } from '@material-ui/core';
import { Lesson } from 'ApiModel';
import React, { FunctionComponent, useState } from 'react';
import useFitText from 'use-fit-text';
import HourDialogComponent from './HourDialogComponent';
import { getContrast } from '../../../utils/math-utils';

type LessonComponentOwnProps = {
    lesson: Lesson;
    height: string;
    lessonsByHour: Lesson[][];
    currentWeekInterval: Date[];
};

type LessonComponentProps = LessonComponentOwnProps;


const useStyles = makeStyles((theme) => ({
    lessonTile: {
        padding: theme.spacing(0.2),
    },
    textStyle: {
        // NOTE(pawelp): fiddle with this if you want to make text colors fancy
        // filter: 'invert(5%) contrast(200%) grayscale(170%) saturate(0%)'
    }
}));

const LessonComponent: FunctionComponent<LessonComponentProps> = ({ lesson, height, lessonsByHour, currentWeekInterval }) => {
    const { fontSize, ref } = useFitText({logLevel: "none"});
    const [open, setOpen] = useState(false);
    const [dialogData, setDialogData] = useState<Lesson[]>([]);
    const [lessonNumber, setLessonNumber] = useState<number>(0);

    const handleClose = () => {
        setOpen(false);
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        let currentTargetRect = e.currentTarget.getBoundingClientRect();
        // console.log(e);
        // console.log(currentTargetRect);
        // console.log(e.pageX);
        const clickXPosRelative = e.pageX - currentTargetRect.left;
        const clickPositionFrac = clickXPosRelative / (currentTargetRect.right - currentTargetRect.left);
        // console.log(clickPositionFrac);
        const lessonDurationFrac = 1 / lesson.duration;
        const xD = Math.floor(clickPositionFrac / lessonDurationFrac);
        // console.log(xD)

        if (e.target === ref.current ||
            (e.target instanceof Node && ref.current.contains(e.target))) {
            setDialogData(lessonsByHour[lesson.time_index + xD]);
            setLessonNumber(lesson.time_index + xD);
            setOpen(true);
        }
    }
    const classes = useStyles();
    const textColor = getContrast(lesson.color);

    return <div style={{
        fontSize, height: height, overflow: 'hidden', display: 'flex', flexDirection: 'column'
    }} ref={ref} onClick={handleClick} className={classes.lessonTile}>
        <div style={{
            textAlign: 'left', flex: "1 0 auto", color: textColor,
        }} className={classes.textStyle}>{lesson.teacher}</div>
        <div style={{ textAlign: 'center', flex: "1 0 auto", color: textColor }} className={classes.textStyle}>{lesson.subject}</div>
        <div style={{ flexShrink: 0, color: textColor }} className={classes.textStyle}>
            <div style={{ float: 'left', textAlign: 'left' }}>{lesson.classroom}</div>
            <div style={{ float: 'right', textAlign: 'right' }}>{lesson.group}</div>
        </div>
        <HourDialogComponent lessons={dialogData} lessonNumber={lessonNumber} dayIndex={lesson.day_index} onClose={handleClose} open={open} currentWeekInterval={currentWeekInterval}/>
    </div>;
};

export default LessonComponent;