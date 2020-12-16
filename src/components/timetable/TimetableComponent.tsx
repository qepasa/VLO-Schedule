import { Box, makeStyles, Typography } from "@material-ui/core";
import { eachDayOfInterval } from "date-fns";
import { endOfWeek, startOfWeek } from "date-fns/esm";
import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "typesafe-actions";
import { loadClassesAsync } from "../../store/classes/actions";
import { loadScheduleAsync } from "../../store/schedule/actions";
import DayTimetableComponent from "./dayTimetable/DayTimetableComponent";
import TimetableHeaderComponent from "./timetableHeader/TimetableHeaderComponent";
import Skeleton from '@material-ui/lab/Skeleton';
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles((theme) => ({
    timetableWrapper: {
        display: 'grid',
        gridAutoFlow: 'rows',
        gridTemplateColumns: '7vw 90vw',
        gridTemplateRows: '5vh repeat(5, 15vh)',
        rowGap: '1px',
        margin: theme.spacing(2, 1, 2, 1),
    },
    skeletonStyle: {
        transform: 'scale(1, 0.95)',
        gridColumn: '1 / 3',
    },
}));

const mapStateToProps = (state: RootState) => ({
    timetableStatus: state.schedule.isLoadingSchedule,
    timetable: state.schedule.schedule,
});

const dispatchProps = {
    loadTimetable: loadScheduleAsync.request,
    loadClasses: loadClassesAsync.request,
}

type ScheduleParams = {
    classParam: string,
}

type ScheduleProps = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const TimetableComponent: FunctionComponent<ScheduleProps> = ({ timetableStatus, timetable, loadTimetable, loadClasses }) => {
    const cssStyleClasses = useStyles();
    const classParam = useParams<ScheduleParams>().classParam;
    useEffect(() => { loadClasses(); }, [loadClasses]);
    useEffect(() => { loadTimetable(classParam); }, [loadTimetable, classParam]);

    const today = new Date();
    const daysInCurrentWeek: Date[] = eachDayOfInterval({
        start: startOfWeek(today, { weekStartsOn: 1 }),
        end: endOfWeek(today, { weekStartsOn: 1 }),
    });

    return <Box className={cssStyleClasses.timetableWrapper}>
        <TimetableHeaderComponent />
        {timetableStatus.loading
            ? Array.from(Array(5).keys()).map((idx) => <Skeleton className={cssStyleClasses.skeletonStyle} animation="wave" key={"skeleton" + idx.toString()} />)
            : timetableStatus.error ?
                <>
                    <ErrorIcon color="error" />
                    <Typography variant="h6" color="error">
                        Wystąpił błąd podczas ładowania rozkładu. Odśwież stronę.
                    </Typography>
                </>
                : Array.from(Array(5).keys()).map(dayIdx => <DayTimetableComponent dayTimetable={timetable[dayIdx]} dayIdx={dayIdx} currentWeekInterval={daysInCurrentWeek} key={dayIdx.toString()} />)
        }
    </Box>;
}


export default connect(mapStateToProps, dispatchProps)(TimetableComponent);