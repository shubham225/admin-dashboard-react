import './topbar.css'
import { NotificationsNone, Settings} from '@mui/icons-material';
import { Badge } from '@mui/material';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">Dashboard</span>
                </div>
                <div className="topright">
                    <div className="topIconContainer">
                    <Badge badgeContent={4} color="primary">
                        <NotificationsNone/>
                    </Badge>
                    </div>
                    <div className="topIconContainer">
                        <Settings/>
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReu6OcXEbtgTs5TmrKjGoxLr2jzAU3P-EwmA&usqp=CAU" alt="" className="topAvatar"></img>
                </div>
            </div>
        </div>
    )
}
