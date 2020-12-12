import { Box } from "@material-ui/core";
import { addMinutes, format } from "date-fns";
import React, { FunctionComponent } from "react";
import useFitText from "use-fit-text";

type HeaderSlotComponentProps = {
    lessonIdx: number;
    startOfLesson: number;
}

const HeaderSlotComponent: FunctionComponent<HeaderSlotComponentProps> = ({ lessonIdx, startOfLesson }) => {
    const { fontSize, ref } = useFitText();
    return <Box height="5vh" overflow="hidden" whiteSpace="nowrap" textOverflow="elipsis">
        <div style={{ fontSize }} ref={ref}>
            <div>{lessonIdx.toString()}</div>
            <div>{format(startOfLesson, "HH:mm") + "-" + format(addMinutes(startOfLesson, 45), "HH:mm")}</div>
        </div>
    </Box>
}


export default HeaderSlotComponent;