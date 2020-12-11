import { Box, makeStyles } from "@material-ui/core";
import { eachDayOfInterval } from "date-fns";
import { endOfWeek, startOfWeek } from "date-fns/esm";
import { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, useParams } from "react-router-dom";
import { RootState } from "typesafe-actions";
import { loadScheduleAsync } from "../store/schedule/actions";
import DayTimetableComponent from "./DayTimetableComponent";
import TimetableHeaderComponent from "./TimetableHeaderComponent";


const mapStateToProps = (state: RootState) => ({
    schedule: state.schedule.schedule,
});

const dispatchProps = {
    loadSchedule: loadScheduleAsync.request,
}

type ScheduleParams = {
    classParam: string,
}

type ScheduleProps = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const useStyles = makeStyles((theme) => ({
    timetableWrapper: {
        display: 'grid',
        gridAutoFlow: 'rows',
        gridTemplateColumns: '10vw 80vw',
        gridTemplateRows: 'repeat(6, 15vh)',
    },
}));

const TimetableComponent: FunctionComponent<ScheduleProps> = ({ schedule, loadSchedule }) => {
    console.log("Am I even here?");
    const classParam = useParams<ScheduleParams>().classParam;
    console.log(classParam);
    useEffect(() => { loadSchedule(classParam); }, [loadSchedule, classParam]);
    const classes = useStyles();
    const today = new Date();
    const days: Date[] = eachDayOfInterval({
        start: startOfWeek(today, { weekStartsOn: 1 }),
        end: endOfWeek(today, { weekStartsOn: 1 }),
    });

    return <Box className={classes.timetableWrapper}>
        <TimetableHeaderComponent />
        {Array.from(Array(5).keys()).map(dayIdx => <DayTimetableComponent dayTimetable={schedule[dayIdx]} dayIdx={dayIdx} currentWeekInterval={days}/>)}
        {/* Class param: {classParam} */}
        {/* Schedule: */}
        {/* {JSON.stringify(schedule)} */}
    </Box>
}


export default connect(mapStateToProps, dispatchProps)(TimetableComponent);