import React, { FunctionComponent, memo } from "react";
import HeaderSlotComponent from "./HeaderSlotComponent";


type TimetableHeaderOwnProps = {
};

const TimetableHeaderComponent: FunctionComponent<TimetableHeaderOwnProps> = memo(() => {
    // todo(pawelp): this is ugly. Probably should extract this data somewhere else (e.g. to redux).
    const startOfLessonArray = [
        '7:10', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '14:50', '15:40', '16:30',
    ];
    return <>
        <div></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(11, calc(90vw/11))', columnGap: '1px' }}>
            {startOfLessonArray.map(startOfLesson => {
                const hm = startOfLesson.split(':');
                return new Date().setHours(parseInt(hm[0]), parseInt(hm[1]));
            }).map((startOfLesson, idx) => <HeaderSlotComponent lessonIdx={idx} startOfLesson={startOfLesson} key={startOfLesson.toString()+idx.toString()}/>)}
        </div>
    </>;
});


export default TimetableHeaderComponent;