import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import AddProduct from './Add Product/AddProduct';
import DashboardHome from './Dashboard Home/DashboardHome';
import MakeAdmin from './Make Admin/MakeAdmin';
import ManageAllOrders from './Manage All Orders/ManageAllOrders';
import ManageProducts from './Manage Products/ManageProducts';
import MyOrders from './My Orders/MyOrders';
import Pay from './Pay/Pay';
import Review from './Review/Review';
import useAuth from '../../Hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
const drawerWidth = 250;
const Dashboard = (props) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, user, handleLogOut } = useAuth();
    console.log(admin)
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ backgroundColor: '#1E1E1E', paddingBottom: '300px' }}>

            {/* <Toolbar /> */}
            <Link to='/' style={{ textDecoration: 'none' }}>
                <Typography variant='h5' style={{ color: '#90A4AE' }} sx={{ my: 3 }}>
                    Bike Zone
                </Typography>
            </Link>

            <Divider />




            <List >

                <Link to={`${url}`} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}  >   <ListItem button style={{ borderBottom: '2px solid #373737' }} >

                    <ListItemText >Dashboard</ListItemText>
                </ListItem>

                </Link>

                {
                    admin ?
                        <Link to={`${url}/makeadmin`} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
                            <ListItem button style={{ borderBottom: '2px solid #373737' }}>

                                <ListItemText > Make Admin</ListItemText>
                            </ListItem>
                        </Link> :

                        <Link to={`${url}/myorders`} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
                            <ListItem button style={{ borderBottom: '2px solid #373737' }}>

                                <ListItemText > My Orders</ListItemText>
                            </ListItem>
                        </Link>
                }


                {
                    admin ?

                        <Link to={`${url}/addproduct`} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
                            <ListItem button style={{ borderBottom: '2px solid #373737' }}>


                                <ListItemText > Add Product</ListItemText>
                            </ListItem>
                        </Link> :
                        <Link to={`${url}/pay`} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
                            <ListItem button style={{ borderBottom: '2px solid #373737' }}>

                                <ListItemText > Pay</ListItemText>
                            </ListItem>
                        </Link>

                }

                {
                    admin ?
                        <Link to={`${url}/manageallorders`} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
                            <ListItem button style={{ borderBottom: '2px solid #373737' }}>

                                <ListItemText > Manage all Orders</ListItemText>
                            </ListItem>


                        </Link> :
                        <Link to={`${url}/review`} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
                            <ListItem button style={{ borderBottom: '2px solid #373737' }}>

                                <ListItemText > Review</ListItemText>
                            </ListItem>
                        </Link>

                }



                {
                    admin && <Link to={`${url}/manageproducts`} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
                        <ListItem button style={{ borderBottom: '2px solid #373737' }}>

                            <ListItemText > Manage Products</ListItemText>
                        </ListItem>

                    </Link>
                }








                <ListItem onClick={handleLogOut} button style={{ borderBottom: '2px solid #373737' }}>

                    <ListItemText style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> Log Out</ListItemText>
                </ListItem>

            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <div>
            <h3>This is Dashboard</h3>


            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="h6" noWrap component="div" sx={{ mx: 5 }}>
                                {user.displayName}
                            </Typography>
                            <Typography variant="h6" align='right' component="div">
                                {
                                    admin ? 'Admin' : 'User'
                                }

                            </Typography>
                        </Box>

                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, }}
                    aria-label="mailbox folders"

                >
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{

                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />

                    <Switch>
                        <Route exact path={`${path}`}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <AdminRoute exact path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addproduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageallorders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageproducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <Route path={`${path}/myorders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                    </Switch>


                </Box>
            </Box>






        </div>
    );
};
Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
}
export default Dashboard;