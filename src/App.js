import Cookies from "js-cookie";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Attendance from "./pages/Attendance/Attendance";

import Auth from "./pages/Auth";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Main from "./pages/Main";
import TimeTable from "./pages/TimeTable/TimeTable";
import Complain from "./pages/Complain/Complain";
import MyCalendar from "./pages/calendar/MyCalendar";
import ViewProfile from "./pages/profile/ViewProfile";
import ProfileEdit from "./pages/profile/ProfileEdit";
import Subject from "./pages/Subject/Subject";
import Result from "./pages/Result/Result";
import Notice from "./pages/Notice/Notice";
import Join from "./pages/Join_Club/Join";

function App() {
  // const history = useHistory();
  const token = Cookies.get("jwt");
  const isLog = Cookies.get("isLoggedIn");

  return (
    <Router>
      {isLog && token ? (
        <Main>
          <Switch>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/attendance">
              <Attendance />
            </Route>
            <Route exact path="/timetable">
              <TimeTable />
            </Route>
            <Route exact path="/profile">
              <ViewProfile />
            </Route>
            <Route exact path="/profile/edit">
              <ProfileEdit />
            </Route>
            <Route exact path="/complain">
              <Complain />
            </Route>
            <Route exact path="/calendar">
              <MyCalendar />
            </Route>
            <Route exact path="/subject">
              <Subject />
            </Route>
            <Route exact path="/result">
              <Result />
            </Route>
            <Route exact path="/notice">
              <Notice />
            </Route>
            <Route exact path="/club">
              <Join />
            </Route>
            <Redirect to="/dashboard" />
          </Switch>
        </Main>
      ) : (
        <Auth>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Redirect to="/login" />
          </Switch>
        </Auth>
      )}
    </Router>
  );
}

export default App;
