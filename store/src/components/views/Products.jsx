import { useState, useEffect, useContext } from 'react';
import ProductsList from '../products/ProductsList';
import CategorySelectList from '../categoriesSelect/CategoriesSelectList';
import { ProductsContext } from '../../productsContext/ProductsContext';
import PriceOrder from '../priceOrder/PriceOrder';

const Products = () => {
    const {state} = useContext(ProductsContext);
    const {products} = state;

    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState(null);

    useEffect(() => {
        let updatedProducts = [...products];
        if (selectedCategory) {
            updatedProducts = products.filter(product => product.category === selectedCategory);
        }
        setFilteredProducts(updatedProducts);
    }, [products, selectedCategory]);

    const handlePriceOrder = (e) => {
        const order = e.target.value;
        setSortOrder(order);
    }

    const sortedProducts = [...filteredProducts].sort((product1, product2) => {
        if (sortOrder === 'ascending') {
            return product1.price - product2.price;
        } else if (sortOrder === 'descending') {
            return product2.price - product1.price;
        } else {
            return 0;
        }        
    });
    
    return <>
        <CategorySelectList 
            products={products}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setFilteredProducts={setFilteredProducts} 
        />
        <PriceOrder 
            products={products} 
            filteredProducts={filteredProducts} 
            setFilteredProducts={setFilteredProducts} 
            handlePriceOrder={handlePriceOrder}
        />
        
        {selectedCategory ? (
            <>
                <h2>Products in category: {selectedCategory}</h2>
                <ProductsList products={sortedProducts} />
            </>
        ) : ( <>
                <h2>All products</h2>
                <ProductsList products={sortedProducts} />
            </>
        )
        }
    </>
}

export default Products;