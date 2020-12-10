import { Lesson } from 'ApiModel';
import React, { FunctionComponent } from 'react';
import useFitText from 'use-fit-text';

type LessonComponentOwnProps = {
    lesson: Lesson;
    parentSize: number;
};

type LessonComponentProps = LessonComponentOwnProps;

const LessonComponent: FunctionComponent<LessonComponentProps> = ({ lesson, parentSize }) => {
    const {fontSize, ref} = useFitText({minFontSize: 4})
    return <div style={{ backgroundColor: lesson.color, fontSize, overflow: 'hidden' }} ref={ref}>
        <div>{lesson.subject}</div>
        <div>{lesson.teacher}</div>
        <div>{lesson.classroom}</div>
    </div>;
};

export default LessonComponent;