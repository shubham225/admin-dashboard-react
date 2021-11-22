import "./sidebar.css"
import { 
    History, 
    Home, 
    List, 
    ListAlt, 
    SupervisorAccount, 
    AssignmentInd } from '@mui/icons-material';
import { Link } from "react-router-dom";


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/"> 
                        <li className="sidebarListItem active">
                            <Home className="sidebarIcon"/>
                            Home
                        </li>
                        </Link> 
                        <li className="sidebarListItem">
                            <List className="sidebarIcon"/>
                            Issue List
                        </li>
                        <li className="sidebarListItem">
                            <History className="sidebarIcon"/>
                            History
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">User Management</h3>
                    <ul className="sidebarList">
                        <Link to="/users/"> 
                            <li className="sidebarListItem">
                                <AssignmentInd className="sidebarIcon"/>
                                Active Users
                            </li>
                        </Link>
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
