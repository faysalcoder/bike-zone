import { TextField, Button, Typography } from '@mui/material';
import React, { useState } from 'react';

const AddProduct = () => {
    const [productData, setProductData] = useState({})

    const handleFieldValue = e => {
        const field = e.target.name
        const value = e.target.value

        const newProductData = { ...productData }
        newProductData[field] = value
        setProductData(newProductData)
        console.log(newProductData)
    }
    const handleAddProduct = e => {
        fetch('https://infinite-castle-70516.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                alert('data added')
                console.log(data)
            })
        e.preventDefault();
    }
    return (
        <div>
            <Typography variant='h5' style={{ color: '#18A3DD', fontWeight: 'bold', margin: '20px' }}>Review</Typography>
            <form onSubmit={handleAddProduct}>
                <TextField onBlur={handleFieldValue} sx={{ width: '50%', m: 1 }} type="text" name="name" id="product-name" label="Product Name" variant="standard" /> <br />
                <TextField onBlur={handleFieldValue} sx={{ width: '50%', m: 1 }} type="text" name="image" id="image-url" label="Image Url" variant="standard" /> <br />
                <TextField onBlur={handleFieldValue} sx={{ width: '50%', m: 1 }} type="text" name="price" id="price" label="Product Price" variant="standard" /> <br />
                <TextField onBlur={handleFieldValue} sx={{ width: '50%', m: 1 }} type="text" name="description" id="description" label="Description" variant="standard" /> <br />
                <Button sx={{ width: '25%', m: 1 }} type="submit" variant="contained">Add Product</Button>
                <Button sx={{ width: '25%', m: 1 }} type="reset" variant="contained">Reset</Button>
            </form>
        </div>
    );
};

export default AddProduct;