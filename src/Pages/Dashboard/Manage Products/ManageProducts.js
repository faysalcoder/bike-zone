import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, Container, TableBody, Button, Typography } from '@mui/material';
import useProducts from '../../../Hooks/useProducts';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';



const ManageProducts = () => {
    const { products, setProducts } = useProducts();
    const delteProduct = id => {
        const proceed = window.confirm('Are you Sure to delete this product? ')
        if (proceed) {
            const url = `https://infinite-castle-70516.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete Succesfully');
                        const remindProducts = products.filter(product => product._id !== id)
                        setProducts(remindProducts)
                    }
                })

        }

    }
    return (
        <div>
            <Typography variant='h5' style={{ color: '#18A3DD', fontWeight: 'bold', margin: '20px' }}>Manage Products</Typography>
            <Container maxWidth='lg'>
                <Link to='/dashboard/addproduct' align='left' style={{ textDecoration: 'none', display: 'flex', justifyContent: 'left', marginBottom: '3px' }}> <Button size="small" variant='contained'>Add Product</Button></Link>

                <TableContainer >
                    <Table sx={{ minWidth: 700, borderRadius: '10px' }} aria-label="customized table">
                        <TableHead sx={{ backgroundColor: '#1E1E1E', }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Thumbnail</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Price</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Description</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }} align="center">Delete</TableCell>

                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {products.map(product => (
                                <TableRow key={product._id}>
                                    <TableCell component="th" scope="row" >

                                        <img src={product.image} style={{ width: '80px', height: '80px', borderRadius: '50px' }} alt="" />

                                    </TableCell>
                                    <TableCell align="center">{product.name}</TableCell>
                                    <TableCell align="center">{product.price}</TableCell>
                                    <TableCell align="center">{product.description.slice(0, 50)}...</TableCell>
                                    <TableCell align="center"><Button onClick={() => delteProduct(product._id)} sx={{ backgroundColor: red[500], color: '#1E1E1E', fontWeight: 'bold' }} startIcon={<DeleteIcon />} >Delete</Button></TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default ManageProducts;