import { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, useParams } from "react-router-dom";
import { RootState } from "typesafe-actions";
import { loadScheduleAsync } from "../store/schedule/actions";


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

const Schedule: FunctionComponent<ScheduleProps> = ({ schedule, loadSchedule }) => {
    console.log("Am I even here?");
    const classParam = useParams<ScheduleParams>().classParam;
    console.log(classParam);
    useEffect(() => { loadSchedule(classParam); }, [loadSchedule, classParam]);

    return <div>
        Class param: {classParam}
        Schedule:
        {JSON.stringify(schedule)}
    </div>
}


export default connect(mapStateToProps, dispatchProps)(Schedule);