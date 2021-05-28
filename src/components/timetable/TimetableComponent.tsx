import { Box, Button, IconButton, makeStyles, Typography } from "@material-ui/core";
import { eachDayOfInterval, format } from "date-fns";
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
import { setClass } from "../../store/preferences/actions";
import { pl } from "date-fns/locale";
import { filteredTimetable, getTimetableSize } from "../../store/root-selectors";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { nextWeek, previousWeek, setDate } from "../../store/date/actions";

const useStyles = makeStyles((theme) => ({
    textWrapper: {
        height: '4vh',
        width: '100%'
    },
    textSection: {
        float: 'left',
        height: 'inherit',
        margin: theme.spacing(1),
    },
    filterAlert: {
        width: '30vw',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'elipsis',
        height: 'inherit',
    },
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
        gridColumn: '2 / 3',
    },
}));

const mapStateToProps = (state: RootState) => ({
    timetableStatus: state.schedule.isLoadingSchedule,
    timetable: state.schedule.schedule,
    timetableSize: getTimetableSize(state),
    filteredTimetable: filteredTimetable(state),
});

const dispatchProps = {
    loadTimetable: loadScheduleAsync.request,
    loadClasses: loadClassesAsync.request,
    setClass: setClass,
    nextWeek: nextWeek,
    prevWeek: previousWeek,
    setDate: setDate,
}

type ScheduleParams = {
    classParam: string,
}

type ScheduleProps = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const TimetableComponent: FunctionComponent<ScheduleProps> = ({ timetableStatus, filteredTimetable, loadTimetable, loadClasses, setClass, nextWeek, prevWeek, setDate }) => {
    const cssStyleClasses = useStyles();
    const classParam = useParams<ScheduleParams>().classParam;
    // NOTE(pawelp): not sure if this guarantees that class will be set
    // **before** we dispatch `loadTimetable`. If any errors occur we could create
    // epic for `setClass` that triggers loadTimetable. For now 
    useEffect(() => { setClass(classParam); }, [setClass, classParam]);
    useEffect(() => { loadClasses(); }, [loadClasses]);
    useEffect(() => { loadTimetable(classParam); }, [loadTimetable, classParam]);

    const today = new Date();
    const daysInCurrentWeek: Date[] = eachDayOfInterval({
        start: startOfWeek(today, { weekStartsOn: 1 }),
        end: endOfWeek(today, { weekStartsOn: 1 }),
    });
    return <>
        <Box className={cssStyleClasses.textWrapper}>
            <Box className={cssStyleClasses.textSection}>
                <IconButton size="small" onClick={() => prevWeek()}>
                    <ArrowBackIosIcon fontSize="small"></ArrowBackIosIcon>
                </IconButton>
                <Button size="small" variant="outlined" onClick={() => setDate(0)}>Dzisiaj</Button>

                <IconButton size="small" onClick={() => nextWeek()}>
                    <ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
                </IconButton>
            </Box>
        </Box>
        <Box className={cssStyleClasses.timetableWrapper}>
            <TimetableHeaderComponent />
            {timetableStatus.loading
                ? Array.from(Array(5).keys()).map((idx) => <>
                    <div style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        {format(daysInCurrentWeek[idx], "iii", { locale: pl })}
                    </div>
                    <Skeleton className={cssStyleClasses.skeletonStyle} animation="wave" key={"skeleton" + idx.toString()} />
                </>)
                : timetableStatus.error ?
                    <>
                        <ErrorIcon color="error" />
                        <Typography variant="h6" color="error">
                            Wystąpił błąd podczas ładowania rozkładu. Odśwież stronę.
                    </Typography>
                    </>
                    : Array.from(Array(5).keys()).map(dayIdx => <DayTimetableComponent dayTimetable={filteredTimetable[dayIdx]} dayIdx={dayIdx} currentWeekInterval={daysInCurrentWeek} key={dayIdx.toString()} />)
            }
        </Box>
    </>;
}


export default connect(mapStateToProps, dispatchProps)(TimetableComponent);