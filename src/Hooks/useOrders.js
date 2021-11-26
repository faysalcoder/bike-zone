import { useEffect, useState } from "react"

const useOrders = () => {
    const [isLoading, setIsLoading] = useState(true)

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://infinite-castle-70516.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setIsLoading(false)
            })

    }, [])

    const deleteOrder = id => {



        const url = `https://infinite-castle-70516.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    const remindOrders = orders.filter(order => order._id !== id)
                    setOrders(remindOrders);
                    return alert('Delete Succesfully');
                }
            })




    }
    const confirmOrder = id => {
        const uniqueId = { orderId: id }
        fetch('https://infinite-castle-70516.herokuapp.com/orders/confirm', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(uniqueId)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return alert('Order Shipped')
            })
    }

    return {
        orders,
        setOrders,
        deleteOrder,
        confirmOrder,
        isLoading
    }
}
export default useOrders;