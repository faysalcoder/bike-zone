import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])
    useEffect(() => {
        setIsLoading(true)
        const url = 'https://infinite-castle-70516.herokuapp.com/products'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
        setIsLoading(false)
    }, [])

    return {
        products,
        setProducts,
        isLoading

    }
}
export default useProducts;