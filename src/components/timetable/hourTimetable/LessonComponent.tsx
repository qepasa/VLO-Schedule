import { makeStyles } from '@material-ui/core';
import { Lesson } from 'ApiModel';
import React, { FunctionComponent, memo, useState } from 'react';
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
    const cssStyleClasses = useStyles();
    const { fontSize, ref } = useFitText({logLevel: "none", minFontSize: 5});
    const [open, setOpen] = useState(false);
    const [dialogData, setDialogData] = useState<Lesson[]>([]);
    const [lessonNumber, setLessonNumber] = useState<number>(0);

    const handleClose = () => {
        setOpen(false);
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        let currentTargetRect = e.currentTarget.getBoundingClientRect();
        const clickXPosRelative = e.pageX - currentTargetRect.left;
        const clickPositionFrac = clickXPosRelative / (currentTargetRect.right - currentTargetRect.left);
        const lessonDurationFrac = 1 / lesson.duration;
        const clickedPart = Math.floor(clickPositionFrac / lessonDurationFrac);

        if (e.target === ref.current ||
            (e.target instanceof Node && ref.current.contains(e.target))) {
            setDialogData(lessonsByHour[lesson.time_index + clickedPart]);
            setLessonNumber(lesson.time_index + clickedPart);
            setOpen(true);
        }
    }
    const textColor = getContrast(lesson.color);

    return <div style={{
        fontSize, height: height, overflow: 'hidden', display: 'flex', flexDirection: 'column'
    }} ref={ref} onClick={handleClick} className={cssStyleClasses.lessonTile}>
        <div style={{
            textAlign: 'left', flex: "1 0 auto", color: textColor,
        }} className={cssStyleClasses.textStyle}>{lesson.teacher}</div>
        <div style={{ textAlign: 'center', flex: "1 0 auto", color: textColor }} className={cssStyleClasses.textStyle}>{lesson.subject}</div>
        <div style={{ flexShrink: 0, color: textColor }} className={cssStyleClasses.textStyle}>
            <div style={{ float: 'left', textAlign: 'left' }}>{lesson.classroom}</div>
            <div style={{ float: 'right', textAlign: 'right' }}>{lesson.group}</div>
        </div>
        <HourDialogComponent lessons={dialogData} lessonNumber={lessonNumber} dayIndex={lesson.day_index} onClose={handleClose} open={open} currentWeekInterval={currentWeekInterval}/>
    </div>;
};

export default LessonComponent;