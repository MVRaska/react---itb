import { useEffect, useState } from "react";
import api from "../../utils/api";
import Footer from "../footer/Footer";

export const onSaleId = 1;
export const sale = 0.3;

const Home = () => {
    const [saleProduct, setSaleProduct] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        api.get(`/products/${onSaleId}`)
        .then(res => {
            setSaleProduct(res.data);
        })
        .catch(error => {
            setError(true);
        })
    }, []);

    return <>
        <h1>Welcome to our online store</h1>
        <p>Here you can find a wide range of products.</p>
        <h3>This spring, hiking backpacks are on sale ${sale * 100}%</h3>
        <img src={saleProduct.image} alt={saleProduct.title} style={{width: '40%'}} />
        <Footer />
    </>
}

export default Home;