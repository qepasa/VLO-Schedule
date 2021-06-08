import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "typesafe-actions";
import { loadClassesAsync } from "../../store/classes/actions";
import { setClass } from "../../store/preferences/actions";
import { loadScheduleAsync } from "../../store/schedule/actions";
import { loadSubstitutionsAsync } from "../../store/substitutions/actions";

type ViewParams = {
    classParam: string,
};

const mapStateToProps = (state: RootState) => ({
    classInStore: state.preferences.class,
});

const dispatchProps = {
    setClass: setClass,
    loadTimetable: loadScheduleAsync.request,
    loadClasses: loadClassesAsync.request,
    loadSubstitutions: loadSubstitutionsAsync.request,
};

type InnerOwnProps = {
    children: JSX.Element;
};

type InnerProps = InnerOwnProps & ReturnType<typeof mapStateToProps> & typeof dispatchProps;


function LazyDispatchComponent({ children, classInStore, setClass, loadTimetable, loadClasses, loadSubstitutions }: InnerProps) {
    const classParam = useParams<ViewParams>().classParam;
    // NOTE(pawelp): not sure if this guarantees that class will be set
    // **before** we dispatch `loadTimetable`. If any errors occur we could create
    // epic for `setClass` that triggers loadTimetable. For now 
    useEffect(() => { setClass(classParam); }, [classInStore]);
    useEffect(() => { loadClasses(); }, [classInStore]);
    useEffect(() => { loadTimetable(classParam); }, [classInStore]);
    useEffect(() => { loadSubstitutions(classParam); }, [classInStore]);

    return <>{children}</>;
}

const XDComponent = connect(mapStateToProps, dispatchProps)(LazyDispatchComponent);

function currentClassDataLoader<P extends object>(WrappedComponent: React.ComponentType<P>) {


    return class extends React.Component {
        render() {
            return (
                <XDComponent>
                    <WrappedComponent {...this.props as P} />
                </XDComponent >);
        }
    }
}




export default currentClassDataLoader;