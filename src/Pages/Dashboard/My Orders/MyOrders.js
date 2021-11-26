import { TableContainer, Table, TableHead, TableRow, TableCell, Container, TableBody, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useOrders from '../../../Hooks/useOrders';
import { yellow, red } from '@mui/material/colors';

const MyOrders = () => {
    const { orders, deleteOrder } = useOrders();
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {
        if (user.email) {
            const myOrdersData = orders.filter(order => order.email === user.email);
            setMyOrders(myOrdersData)
        }
    }, [orders, user.email])

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you Sure to delete this order? ')
        if (proceed) {
            deleteOrder(id)
        }
    }

    return (
        <div>
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
                            {myOrders.map(order => (
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
                                    <TableCell align="center">{order.status}</TableCell>
                                    <TableCell align="center"><Button onClick={() => handleDeleteOrder(order._id)} sx={{ backgroundColor: red[500], color: '#1E1E1E', fontWeight: 'bold', mr: 1 }} >Cancel</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default MyOrders;