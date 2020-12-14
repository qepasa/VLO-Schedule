import { createMuiTheme, CssBaseline, ThemeProvider, useMediaQuery } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import {
  Switch,
  Route,
  HashRouter,
  Redirect
} from "react-router-dom";
import { RootState } from "typesafe-actions";
import PageFooterComponent from "./components/PageFooterComponent";
import PageHeaderComponent from "./components/PageHeaderComponent";
import TimetableComponent from "./components/timetable/TimetableComponent";
import { setTheme } from "./store/preferences/actions";

const mapStateToProps = (state: RootState) => ({
  preferences: state.preferences
});

const dispatchProps = {
  setTheme: setTheme,
};

type AppProps = ReturnType<typeof mapStateToProps> & typeof dispatchProps;
type ThemeType = 'dark' | 'light';

const App: FunctionComponent<AppProps> = ({ preferences, setTheme }) => {
  const preferredTheme = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
  if (preferences.theme === "") {
    setTheme(preferredTheme);
  }

  const computedTheme = preferences.theme === "" ? preferredTheme : preferences.theme;

  const theme = React.useMemo(() => createMuiTheme({
    palette: {
      type: (computedTheme as ThemeType),
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            '-webkit-text-size-adjust': 'none',
            'text-size-adjust': 'none',
            '-moz-text-size-adjust': 'none',
            '-ms-text-size-adjuist': 'none',
          },
          '*': {
            '--scrollbarBG': '#CFD8DC',
            '--thumbBG': '#90A4AE',
            scrollbarWidth: 'thin',
            scrollbarColor: 'var(--thumbBG) var(--scrollbarBG)',
          },
          '*::-webkit-scrollbar': {
            width: '11px',
          },
          '*::-webkit-scrollbar-track': {
            background: 'var(--scrollbarBG)',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'var(--thumbBG)',
            bordeRadius: '6px',
            border: '3px solid var(--scrollbarBG)',
          }
        }
      }
    }
  }), [computedTheme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Switch>
          <Route path="/timetable/:classParam">
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
              <div style={{ flex: "1 0 auto" }}>
                <PageHeaderComponent />
                <TimetableComponent />
              </div>
              <PageFooterComponent />
            </div>
          </Route>
          <Route path="/">
            <Redirect to="/timetable/1A" />
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider >
  );
}

export default connect(mapStateToProps, dispatchProps)(App);