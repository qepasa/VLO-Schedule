import { List, makeStyles, Typography } from "@material-ui/core";
import { addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";
import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { RootState } from "typesafe-actions";
import { setClass } from "../../../store/preferences/actions";
import { GetCurrentDateInPoland } from "../../../utils/time-utils";
import Navbar from "../navbar/Navbar";
import Skeleton from '@material-ui/lab/Skeleton';
import SingleDaySubstitutionComponent from "./SingleDaySubstitutionComponent";
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    inline: {
        display: 'inline',
    },
    skeletonStyle: {
        transform: 'scale(1, 0.95)',
        gridColumn: '2 / 3',
    },
}));


const mapStateToProps = (state: RootState) => ({
    substitutions: state.substitutions.substitutions,
    substitutionsStatus: state.substitutions.isLoadingSubstitutions,
    currentDateOffset: state.date,
})

const dispatchProps = {
    setClass: setClass,
};

type SubstitutionsParams = {
    classParam: string,
};

type SubstitutionsComponentProps = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const SubstitutionsComponent: FunctionComponent<SubstitutionsComponentProps> = ({ substitutions, substitutionsStatus, currentDateOffset, setClass }) => {
    const currentDate = addWeeks(GetCurrentDateInPoland(), currentDateOffset);
    const currentStartOfWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
    const currentEndOfWeek = endOfWeek(currentDate, { weekStartsOn: 1 });
    const daysInWeek = eachDayOfInterval({
        start: currentStartOfWeek,
        end: currentEndOfWeek
    });


    const cssStyleClasses = useStyles();
    const classParam = useParams<SubstitutionsParams>().classParam;
    let history = useHistory();
    useEffect(() => { setClass(classParam); }, [setClass, classParam]);

    if (substitutionsStatus.error) {
        return <>
            <ErrorIcon color="error" />
            <Typography variant="h6" color="error">
                Wystąpił błąd podczas ładowania rozkładu. Odśwież stronę.
                    </Typography>
        </>;
    }

    const onNavButtonClick = () => {
        history.push(`/timetable/${classParam}`);
    };
    return <>
        <Navbar navigationButtonText="Plan lekcji" onNavButtonClick={onNavButtonClick} />

        <List className={cssStyleClasses.root}>
            {daysInWeek.filter((_, idx) => idx < 5).map((currDay, idx) => {
                if (substitutionsStatus.loading < 7) {
                    return <Skeleton className={cssStyleClasses.skeletonStyle} animation="wave" key={"skeleton" + idx.toString()} />;
                }
                console.log(substitutions[idx]);
                console.log(idx)
                return <SingleDaySubstitutionComponent dayOfWeek={currDay} substitution={substitutions[idx]} />;
            })}
        </List>
    </>;
}

export default connect(mapStateToProps, dispatchProps)(SubstitutionsComponent);