import React, { FunctionComponent } from "react";
import { DaySchedule, Lesson } from 'ApiModel';
import { format } from "date-fns";
import { lcm } from "../../../utils/math-utils";
import LessonComponent from "../hourTimetable/LessonComponent";
import { pl } from "date-fns/locale";

function getLessonsByHour(dayTimetable: DaySchedule) {
    const lessonsByHour = [...Array(11)].map(() => Array<Lesson>());

    // console.log(lessonsByHour);
    dayTimetable.flat().map(lesson => {
        for (let i = 0; i < lesson.duration; i++) {
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

type ProcessedLesson = Lesson & PositionData;

type ProcessedHourSlot = {
    lessons: Array<ProcessedLesson>; // lessons that start at current slot. Sorted by (time_index+duration, subject) descending.
    totalWidth: number;
    ceil: number;
    floor: number;
}

type CellPositionData = {
    top: number;
    bottom: number;
}

function getProcessedHourSlots(dayTimetable: DaySchedule, lessonsByHour: Lesson[][]): Array<ProcessedHourSlot> {
    const maxCongetsion = Array(11).fill(0);
    // console.log(lessonsByHour);
    for (let i = 0; i < 11; ++i) {
        maxCongetsion[i] = lessonsByHour[i].length;
    }

    // console.log(maxCongetsion);

    const totalWidth = lcm(maxCongetsion.filter(val => val !== 0));

    const processedHourSlot = dayTimetable.map(hourSchedule => {
        const processedLessons = hourSchedule.map(lesson => { return lesson as ProcessedLesson });

        processedLessons.sort((a, b) => {
            const aLen = a.time_index + a.duration - 1;
            const bLen = b.time_index + b.duration - 1;
            if (aLen === bLen) {
                return a.subject.localeCompare(b.subject);
            }
            return aLen > bLen ? -1 : 1;
        });
        return {
            lessons: processedLessons,
            totalWidth: totalWidth,
            ceil: totalWidth,
            floor: 0,
        } as ProcessedHourSlot;
    });
    const remainingWidth = Array(11).fill(totalWidth);
    /// calculate remaining width for each slot individually!!!!
    for (const hourSlot of processedHourSlot) {
        for (const lesson of hourSlot.lessons) {
            const lessonStart = lesson.time_index, lessonEnd = lesson.time_index + lesson.duration;
            let width = totalWidth + 1;
            for (let i = lessonStart; i < lessonEnd; ++i) {
                width = Math.min(width, Math.floor(remainingWidth[i] / maxCongetsion[i]));
            }
            // const width = Math.floor(Math.max(...remainingWidth.slice(lessonStart, lessonEnd)) / lessonMaxCongestion);
            // console.log(`maxCong: ${lessonMaxCongestion}, remainingW: ${hourSlot.reamainingWidth}`);
            lesson.width = width;
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

    const remainingWidth = Array<CellPositionData>(11);
    for (let i = 0; i < 11; ++i) {
        remainingWidth[i] = {
            bottom: 1,
            top: gridRows + 1,
        };
    }
    let fromBottom: boolean = true;
    // console.log(remainingWidth);
    const ToComps = processedHourSlots.map(hourSlot => {
        const result = [];
        for (const lesson of hourSlot.lessons) {
            // console.log(`Processing: $`)
            let cellFreeSpace = remainingWidth[lesson.time_index];
            let gridRowStart, gridRowEnd;
            if (fromBottom) {
                gridRowStart = cellFreeSpace.bottom;
                gridRowEnd = cellFreeSpace.bottom + lesson.width;
            } else {
                gridRowEnd = cellFreeSpace.top;
                gridRowStart = cellFreeSpace.top - lesson.width;
            }
            // console.log(`fromBottom: ${fromBottom} lesson:`);
            // console.log(lesson);
            // console.log(`gridRowStart: ${gridRowStart}, gridRowEnd: ${gridRowEnd}`);

            result.push(<div style={
                {
                    backgroundColor: `${lesson.color}`,
                    gridRow: `${gridRowStart.toString()} / ${gridRowEnd.toString()}`,
                    gridColumn: `${(lesson.time_index + 1).toString()} / ${(lesson.time_index + lesson.duration + 1).toString()}`,

                }}>
                <LessonComponent lesson={lesson} height={(15 * lesson.width / gridRows) + 'vh'} lessonsByHour={lessonsByHour} currentWeekInterval={currentWeekInterval} />
            </div>);
            for (let i = lesson.time_index; i < lesson.time_index + lesson.duration; i++) {
                if (fromBottom) {
                    remainingWidth[i].bottom = gridRowEnd;
                } else {
                    remainingWidth[i].top = gridRowStart;
                }
            }
            // console.log(remainingWidth);
            fromBottom = !fromBottom;
        }
        return result;
    })
    // TODO(pawelp): handle empty processedhourslots
    return <>
        <div style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
            {format(currentWeekInterval[dayIdx], "iii", { locale: pl })}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(11, calc(90vw/11))`, columnGap: '1px', gridTemplateRows: `repeat(${gridRows}, calc(15vh/${gridRows}))` }}>
            {ToComps.flat()}
        </div>
        {/* {lessonsByHour.map((hour, idx) => <HourTimetableComponent slotIdx={idx} hourTimetable={hour} />)} */}
    </>;
};

export default DayTimetableComponent;
