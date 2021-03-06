import "./sidebar.css"
import { 
    History, 
    Home, 
    List, 
    ListAlt, 
    SupervisorAccount, 
    AssignmentInd } from '@mui/icons-material';
import { NavLink } from "react-router-dom";


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <NavLink to="/" className="sidebarListItem">
                            <Home className="sidebarIcon"/>
                            Home
                        </NavLink>
                        <NavLink to="/tickets/" className="sidebarListItem">
                            <List className="sidebarIcon"/>
                            Tickets List
                        </NavLink>
                        <NavLink to="/users/" className="sidebarListItem">
                                <AssignmentInd className="sidebarIcon"/>
                                Users
                        </NavLink>
                        <li className="sidebarListItem">
                            <History className="sidebarIcon"/>
                            History
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">User Management</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <ListAlt className="sidebarIcon"/>
                            All Users
                        </li>
                        <li className="sidebarListItem">
                            <SupervisorAccount className="sidebarIcon"/>
                            Authorize Users
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
