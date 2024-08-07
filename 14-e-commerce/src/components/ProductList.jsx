import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'

function ProductList() {
    const dispatch = useDispatch();
    const { products, loading } = useSelector((store) => store.product);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
