import React, { FunctionComponent } from "react";
import { DaySchedule, Lesson } from 'ApiModel';
import { Box, Container, makeStyles } from "@material-ui/core";
import { format } from "date-fns";
import HourTimetableComponent from "./HourTimetableComponent";

type DayTimetableOwnProps = {
    dayTimetable: DaySchedule;
    dayIdx: number;
    currentWeekInterval: Date[];
};

type DayTimetableProps = DayTimetableOwnProps;


const DayTimetableComponent: FunctionComponent<DayTimetableProps> = ({ dayTimetable, dayIdx, currentWeekInterval }) => {
    if (!dayTimetable) {
        return <div></div>;
    }
    console.log(dayTimetable.flat());
    const hourData = [...Array(11)].map(e => Array<Lesson>());

    console.log(hourData);
    dayTimetable.flat().map(lesson => {
        for (let i = 0; i < lesson.duration; i++) {
            console.log(lesson);
            hourData[lesson.time_index + i].push(lesson);
        }
    });
    console.log(hourData);
    return <>
        <div>
            {format(currentWeekInterval[dayIdx], "EEEE")}
        </div>
        {hourData.map((hour, idx) => <HourTimetableComponent slotIdx={idx} hourTimetable={hour} />)}
    </>;
};

export default DayTimetableComponent;