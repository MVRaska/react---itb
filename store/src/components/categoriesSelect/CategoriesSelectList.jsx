import { useEffect, useState } from "react";
import api from "../../utils/api";
import CategoriesSelectItems from "./CategoriesSelectItems";

const CategoriesSelectList = ({products}) => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        api.get('products/categories')
        .then(res => setCategories(res.data))
        .catch(e => setError(true))
    }, []);

    return <>
        <CategoriesSelectItems products={products} categories={categories}/>
    </>
}

export default CategoriesSelectList;