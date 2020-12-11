import { Typography } from '@material-ui/core';
import { Lesson } from 'ApiModel';
import React, { FunctionComponent } from 'react';
import useFitText from 'use-fit-text';

type LessonComponentOwnProps = {
    lesson: Lesson;
    height: string;
};

type LessonComponentProps = LessonComponentOwnProps;

const LessonComponent: FunctionComponent<LessonComponentProps> = ({ lesson, height }) => {
    const { fontSize, ref } = useFitText();
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        let currentTargetRect = e.currentTarget.getBoundingClientRect();
        console.log(currentTargetRect);
        console.log(e.pageX);
        const clickXPosRelative = e.pageX - currentTargetRect.left;
        const clickPositionFrac = clickXPosRelative / (currentTargetRect.right - currentTargetRect.left);
        console.log(clickPositionFrac);
        const lessonDurationFrac = 1 / lesson.duration;
        const xD = Math.floor(clickPositionFrac / lessonDurationFrac);
        console.log(xD);
    }
    return <div style={{ fontSize, height: height, overflow: 'hidden' }} ref={ref} onClick={handleClick}>
        <div style={{ textAlign: 'left' }}>{lesson.subject}</div>
        <div style={{ textAlign: 'center' }}>{lesson.teacher}</div>
        <div style={{ textAlign: 'right' }}>{lesson.classroom}</div>
    </div>;
};

export default LessonComponent;