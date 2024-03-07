import ProductsListItem from './ProductsListItem';

const ProductsList = ({products}) => {

    return <>
        {products.map(product => <ProductsListItem key={product.id} product={product} />)}
    </>
}

export default ProductsList;