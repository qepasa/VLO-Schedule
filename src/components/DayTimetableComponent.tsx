import React, { FunctionComponent } from "react";
import { DaySchedule, Lesson } from 'ApiModel';
import { format } from "date-fns";
import { lcm } from "../utils/math-utils";
import LessonComponent from "./LessonComponent";

function getLessonsByHour(dayTimetable: DaySchedule) {
    const lessonsByHour = [...Array(11)].map(() => Array<Lesson>());

    // console.log(lessonsByHour);
    dayTimetable.flat().map(lesson => {
        for (let i = 0; i < lesson.duration; i++) {
            // console.log(lesson);
            lessonsByHour[lesson.time_index + i].push(lesson);
        }
    });
    return lessonsByHour;
}

type DayTimetableOwnProps = {
    dayTimetable: DaySchedule;
    dayIdx: number;
    currentWeekInterval: Date[];
};

type DayTimetableProps = DayTimetableOwnProps;

type PositionData = {
    width: number,
};

type ProcessedLesson = {
    lesson: Lesson;
    positionData: PositionData;
};

type ProcessedHourSlot = {
    lessons: Array<ProcessedLesson>; // lessons that start at current slot. Sorted by (time_index+duration, subject) descending.
    totalWidth: number;
    reamainingWidth: number;
}

function getProcessedHourSlots(dayTimetable: DaySchedule, lessonsByHour: Lesson[][]): Array<ProcessedHourSlot> {
    const maxCongetsion = Array(11).fill(0);
    console.log(lessonsByHour);
    for (let i = 0; i < 11; ++i) {
        maxCongetsion[i] = lessonsByHour[i].length;
    }

    console.log(maxCongetsion);

    const totalWidth = lcm(maxCongetsion.filter(val => val != 0));

    const processedHourSlot = dayTimetable.map(hourSchedule => {
        const processedLessons = hourSchedule.map(lesson => { return { lesson } as ProcessedLesson });

        processedLessons.sort((a, b) => {
            const aLen = a.lesson.time_index + a.lesson.duration - 1;
            const bLen = b.lesson.time_index + b.lesson.duration - 1;
            if (aLen == bLen) {
                return a.lesson.subject.localeCompare(b.lesson.subject);
            }
            return aLen > bLen ? -1 : 1;
        });
        return {
            lessons: processedLessons,
            totalWidth: totalWidth,
            reamainingWidth: totalWidth,
        } as ProcessedHourSlot;
    });
    const remainingWidth = Array(11).fill(totalWidth);
    /// calculate remaining width for each slot individually!!!!
    for (const hourSlot of processedHourSlot) {
        for (const lesson of hourSlot.lessons) {
            const lessonStart = lesson.lesson.time_index, lessonEnd = lesson.lesson.time_index + lesson.lesson.duration;
            const lessonMaxCongestion = Math.max(...maxCongetsion.slice(lessonStart, lessonEnd));
            const width = Math.floor(remainingWidth[lessonStart] / lessonMaxCongestion);
            // console.log(`maxCong: ${lessonMaxCongestion}, remainingW: ${hourSlot.reamainingWidth}`);
            lesson.positionData = { width };
            for (let i = lessonStart; i < lessonEnd; ++i) {
                maxCongetsion[i]--;
                remainingWidth[i] -= width;
            }
        }
    }

    return processedHourSlot;
}

const DayTimetableComponent: FunctionComponent<DayTimetableProps> = ({ dayTimetable, dayIdx, currentWeekInterval }) => {
    if (!dayTimetable) {
        return <div></div>;
    }
    // console.log(dayTimetable.flat());
    const lessonsByHour = getLessonsByHour(dayTimetable);
    // console.log(lessonsByHour);
    const processedHourSlots = getProcessedHourSlots(dayTimetable, lessonsByHour);

    const gridRows = processedHourSlots.length > 0 ? processedHourSlots[0].totalWidth : 1;
    console.log(processedHourSlots);

    const remainingWidth = Array(11).fill(gridRows+1);
    const ToComps = processedHourSlots.map(hourSlot => {
        const result = [];
        for (const lesson of hourSlot.lessons) {
            // console.log(`Processing: $`)
            let bottomRow = remainingWidth[lesson.lesson.time_index];
            result.push(<div style={
                {
                    backgroundColor: `${lesson.lesson.color}`,
                    gridRow: `${(bottomRow - lesson.positionData.width).toString()} / ${bottomRow.toString()}`,
                    gridColumn: `${(lesson.lesson.time_index+1).toString()} / ${(lesson.lesson.time_index + lesson.lesson.duration + 1).toString()}`,

                }}>
                    <LessonComponent lesson={lesson.lesson} height={(15*lesson.positionData.width / gridRows) + 'vh'} lessonsByHour={lessonsByHour}/>
            </div>);
            for(let i = lesson.lesson.time_index; i < lesson.lesson.time_index + lesson.lesson.duration; ++i) {
                remainingWidth[i] -= lesson.positionData.width;
            }
        }
        return result;
    })
    // TODO(pawelp): handle empty processedhourslots
    return <>
        <div>
            {format(currentWeekInterval[dayIdx], "EEEE")}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(11, calc(90vw/11))`, columnGap: '1px', gridTemplateRows: `repeat(${gridRows}, calc(15vh/${gridRows}))` }}>
            {ToComps.flat()}
        </div>
        {/* {lessonsByHour.map((hour, idx) => <HourTimetableComponent slotIdx={idx} hourTimetable={hour} />)} */}
    </>;
};

export default DayTimetableComponent;
