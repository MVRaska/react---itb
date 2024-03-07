import { useState, useEffect, useContext } from 'react';
import api from '../../utils/api';
import ProductsList from '../products/ProductsList';
import CategorySelectList from '../categoriesSelect/CategoriesSelectList';
import { ProductsContext } from '../../productsContext/ProductsContext';

const Products = () => {
    // const [products, setProducts] = useState([]);
    // const [error, setError] = useState(false);

    const [state, productsDispatch] = useContext(ProductsContext);
    const {products, error} = state;

    useEffect(() => {

        // api.get('/products')
        // .then(res => setProducts(res.data))
        // .catch(e => setError(true))

        api.get('/products')
        .then(res => productsDispatch({type: 'FETCH_PRODUCTS_SUCCESS', payload: res.data}))
        .catch(error => productsDispatch({type: 'FETCH_PRODUCTS_FAILURE', payload: error.data}))
    }, [])
    
    return <>
        <CategorySelectList products={products} />
        {/* <PriceOrderSelect /> */}
        <h2>All products</h2>
        <ProductsList products={products} />
    </>
}

export default Products;