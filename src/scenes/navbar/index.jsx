import { useState } from 'react';
import {
    Box,
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery
} from '@mui/icons-material';
import {
    Search, 
    Message,
    DarkMode,
    LightMode,
    Notifications,
    Help,
    Menu,
    Close
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setMode, setLogout } from 'state';
import FlexBetween from 'components/FlexBetween';

const NavBar = () => {
    return (
        <div>NavBar Page</div>
    )
}

export default NavBar;