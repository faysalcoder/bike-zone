import { TableContainer, Table, TableHead, TableRow, TableCell, Container, TableBody, Button, Typography } from '@mui/material';
import React from 'react';
import useOrders from '../../../Hooks/useOrders';
import { yellow } from '@mui/material/colors';
import SkeletonProvider from '../../Shared/SkeletonProvider';

const ManageAllOrders = () => {
    const { orders, confirmOrder, isLoading } = useOrders();
    if (isLoading) {
        return <SkeletonProvider></SkeletonProvider>
    }
    console.log(orders)
    return (
        <div>
            <Typography variant='h4' style={{ color: '#18A3DD', fontWeight: 'bold', margin: '20px' }}>Manage all orders</Typography>
            <Container maxWidth='lg'>
                <TableContainer >
                    <Table sx={{ minWidth: 700, borderRadius: '10px' }} aria-label="customized table">
                        <TableHead sx={{ backgroundColor: '#1E1E1E', }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Email</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Product</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Price</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Delivery Date</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Mobile</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Adress</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Status</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center"></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {orders.map(order => (
                                <TableRow key={order._id}>
                                    <TableCell component="th" scope="row">
                                        {order.name}
                                    </TableCell>
                                    <TableCell align="center">{order.email}</TableCell>
                                    <TableCell align="center">{order.product}</TableCell>
                                    <TableCell align="center">{order.price}</TableCell>
                                    <TableCell align="center">{order.date}</TableCell>
                                    <TableCell align="center">{order.mobile}</TableCell>
                                    <TableCell align="center">{order.adress}</TableCell>
                                    <TableCell align="center">{order.status !== 'Pending' ? 'Shipped' : 'Pending'}</TableCell>
                                    <TableCell align="center" ><Button onClick={() => confirmOrder(order._id)} sx={{ backgroundColor: yellow[500], color: '#1E1E1E', fontWeight: 'bold', mr: 1 }} >Shipped</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default ManageAllOrders;