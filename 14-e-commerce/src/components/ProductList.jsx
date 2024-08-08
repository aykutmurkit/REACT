import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'
import Product from './Product';

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
        <div >
           <div className='flex-row' style={{flexWrap:"wrap", marginTop:"25px"}}>
           {
                products && products.map((product) => (
                    <Product key={product.id} product={product}/>
                ))
            }
           </div>
        </div>
    );
}

export default ProductList;
