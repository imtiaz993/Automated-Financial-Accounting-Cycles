import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AddCardIcon from '@mui/icons-material/AddCard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import BalanceIcon from '@mui/icons-material/Balance';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PaidIcon from '@mui/icons-material/Paid';
import AvatarC from './components/AvatarC';
import { Link } from "react-router-dom";
import './sidebar.css'
const drawerWidth = 240;
const Sidebar = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="fixed"  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar style={{backgroundColor:"navy",display:'flex',justifyContent:'flex-start'}}>
                <img src='/images/log.png' style={{objectFit:"fill"}} width='70' height='70'/>
                    <Typography variant="h6" noWrap component="div">
                        
                       <span style={{letterSpacing:"1px",marginLeft:"10px"}}>PERFECTLY BALANCED</span>
                    </Typography>
                    <div style={{marginLeft:"auto"}}>
                   
                    </div>
                </Toolbar>
                
            </AppBar>
            <Drawer variant="permanent"  sx={{ width: drawerWidth, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }, }} >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>

                    <List style={{marginTop:"10px"}} >
                        <Link to='/' style={{color: "black",textDecoration: "none"}}  className={(navData) => (navData.isActive ? 'active' : '')}>
                            <ListItem disablePadding >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'Home'} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>


                    <Divider />


                    <List>
                        <Link to='/Add-Entry' style={{color: "black",textDecoration: "none"}}  className={(navData) => (navData.isActive ? 'active' : '')}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AddCardIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'Add Entries'} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>


                    <Divider />


                    <List>
                        <Link to='/General-Journal' style={{color: "black",textDecoration: "none"}}  className={(navData) => (navData.isActive ? 'active' : '')}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ReceiptLongIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'General Journal'} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>



                    <List>
                        <Link to='/Ledger' style={{color: "black",textDecoration: "none"}}  className={(navData) => (navData.isActive ? 'active' : '')}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TextFieldsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'T Account'} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>



                    <List>
                        <Link to='/Trial-Balance' style={{color: "black",textDecoration: "none"}}  className={(navData) => (navData.isActive ? 'active' : '')}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ListAltIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Trial Balance"} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>

                    <Divider />

                    <List>
                        <Link to='/Balance-Sheet' style={{color: "black",textDecoration: "none"}}  className={(navData) => (navData.isActive ? 'active' : '')}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <BalanceIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Balance Sheet"} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>


                    <List>
                        <Link to='/Income-Statement' style={{color: "black",textDecoration: "none"}}  className={(navData) => (navData.isActive ? 'active' : '')}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <PaidIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Income Statement"} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>



                </Box>
            </Drawer>
        </>
    )
}

export default Sidebar