import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import "./app.css"
import Home from './pages/home/Home';
import Users from './pages/user/User';
import Issueslist from './pages/issueslist/Issueslist';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="appPages">
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/users" element={<Users/>}></Route>
          <Route exact path="/tickets" element={<Issueslist/>}></Route>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
