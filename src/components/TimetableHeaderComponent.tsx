import { Box } from "@material-ui/core";
import { addMinutes, format } from "date-fns";
import React, { FunctionComponent } from "react";
import { start } from "repl";


type TimetableHeaderOwnProps = {
};

const TimetableHeaderComponent: FunctionComponent<TimetableHeaderOwnProps> = () => {
    // todo(pawelp): this is ugly. Probably should extract this data somewhere else (e.g. to redux).
    const startOfLessonArray = [
        '7:10', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '14:50', '15:40', '16:30',
    ];
    return <>
        <div>Dzień</div>
        {startOfLessonArray.map(startOfLesson => {
            const hm = startOfLesson.split(':');
            return new Date().setHours(parseInt(hm[0]), parseInt(hm[1]));
        }).map((startOfLesson, idx) => <Box>
            <div>{idx.toString()}</div>
            <div>{format(startOfLesson, "k:mm")+"-"+format(addMinutes(startOfLesson, 45), "k:mm")}</div>
        </Box>)}
    </>;
};


export default TimetableHeaderComponent;