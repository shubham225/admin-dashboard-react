import { useState } from "react";
import './topbar.css'
import { NotificationsNone, Settings} from '@mui/icons-material';
import { Badge, 
         Avatar, 
         Menu, 
         MenuItem } from '@mui/material';
import { deepOrange } from '@mui/material/colors';


export default function Topbar({loggedin, handleSignout}) {

    const [anchorEl, setAnchorEl] = useState('');
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">Dashboard</span>
                </div>
                { loggedin ? (
                    <div className="topright">
                        <div className="topIconContainer">
                            <Badge badgeContent={4} color="primary">
                                <NotificationsNone />
                            </Badge>
                        </div>
                        <div className="topIconContainer">
                            <Settings/>
                        </div>
                        
                        <div>
                            <Avatar
                                className="topAvatar" 
                                sx={{ bgcolor: deepOrange[500] }}
                                id="basic-button"
                                aria-controls="basic-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                SS
                            </Avatar>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleSignout}>Logout</MenuItem>
                            </Menu>
                        </div>
                    </div>
                ) : (<></>)
                }
            </div>
        </div>
    )
}
