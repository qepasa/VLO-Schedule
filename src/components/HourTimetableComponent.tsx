import { FunctionComponent } from "react";
import { HourSchedule } from 'ApiModel';
import LessonComponent from "./LessonComponent";
import { repeat } from "rxjs/operators";

type HourTimetableOwnProps = {
    slotIdx: number,
    hourTimetable: HourSchedule;
};

type HourTimetableProps = HourTimetableOwnProps;

const HourTimetableComponent: FunctionComponent<HourTimetableProps> = ({ slotIdx, hourTimetable }) => {
    // console.log(dayTimetable);
    // console.log("idx: " + slotIdx);
    // console.log(hour[0]);
    return <div style={{height: '150px', maxHeight: '150px', display: 'grid', gridTemplateColumns: 'auto', gridTemplateRows: `repeat(${hourTimetable.length}, calc(150px/${hourTimetable.length}))` }}>
        {hourTimetable.map(lesson => <LessonComponent lesson={lesson} parentSize={hourTimetable.length}/>)}
    </div>;
};

export default HourTimetableComponent;