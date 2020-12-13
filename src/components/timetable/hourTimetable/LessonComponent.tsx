import { Typography } from '@material-ui/core';
import { Lesson } from 'ApiModel';
import React, { FunctionComponent, useState } from 'react';
import ReactDOM from 'react-dom';
import useFitText from 'use-fit-text';
import HourDialogComponent from './HourDialogComponent';

type LessonComponentOwnProps = {
    lesson: Lesson;
    height: string;
    lessonsByHour: Lesson[][];
};

type LessonComponentProps = LessonComponentOwnProps;

const LessonComponent: FunctionComponent<LessonComponentProps> = ({ lesson, height, lessonsByHour }) => {
    const { fontSize, ref } = useFitText();
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

    return <div style={{ fontSize, height: height, overflow: 'hidden' }} ref={ref} onClick={handleClick}>
        <div style={{ textAlign: 'left' }}>{lesson.subject} {lesson.group}</div>
        <div style={{ textAlign: 'center' }}>{lesson.teacher}</div>
        <div style={{ textAlign: 'right' }}>{lesson.classroom}</div>
        <HourDialogComponent lessons={dialogData} lessonNumber={lessonNumber} onClose={handleClose} open={open} />
    </div>;
};

export default LessonComponent;