
const CategoriesSelectItems = ({products, categories, selectedCategory, setSelectedCategory, setFilteredProducts}) => {

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setSelectedCategory(selectedCategory);

        const filteredProducts = products.filter(product => product.category === selectedCategory);
        setFilteredProducts(filteredProducts);
    }

    return <>
        <p>Filter products by category:</p>
        <select  value={selectedCategory} onChange={handleCategoryChange} className="filterCategory">
            <option value="" selected hidden>Select category</option>
            {categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
    </>
}

export default CategoriesSelectItems;