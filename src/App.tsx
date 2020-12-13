import { Container } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  HashRouter
} from "react-router-dom";
import PageFooterComponent from "./components/PageFooterComponent";
import PageHeaderComponent from "./components/PageHeaderComponent";
import TimetableComponent from "./components/timetable/TimetableComponent";



export default function App() {
  return (
    <HashRouter basename={"/"}>
      {/* <div>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
        </ul> */}

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/schedule/:classParam">
          <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <div style={{flex: "1 0 auto"}}>
              <PageHeaderComponent />
              <TimetableComponent />
            </div>
            <PageFooterComponent />
          </div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      {/* </div> */}
    </HashRouter>
  );
}

function Home() {
  return <h2>
    Home basename
    <Link to="/schedule/2E">Schedule</Link>
  </h2>;
}

const About = () => {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

interface TopicParams {
  topicId: string,
};

function Topic() {
  let { topicId } = useParams<TopicParams>();
  return <h3>Requested topic ID: {topicId}</h3>;
}

