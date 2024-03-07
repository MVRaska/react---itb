import ProductsListItem from '../products/ProductsListItem';

const CategoriesSelectItems = ({products, categories}) => {

    const handleCategoryChange = () => {
        {categories.map(category => (
            products.filter(product => product.category === category ? <ProductsListItem  /> : null)
        ))}
    }

    return <>
        <p>Filter products by category:</p>
        <select onChange={handleCategoryChange}>
            {categories.map(category => <option value={category}>{category}</option>)}
        </select>
    </>
}

export default CategoriesSelectItems;