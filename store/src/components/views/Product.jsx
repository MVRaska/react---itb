import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import api from '../../utils/api';
import { onSaleId, sale } from './Home';

const Product = () => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(false);

    const {productId} = useParams();

    useEffect(() => {
        api.get(`/products/${productId}`)
        .then(res => setProduct(res.data))
        .catch(e => setError(true))
    }, [])

    return <div>
        {product ? (
            <div>
                <p>{product.title}</p>
                <img src={product.image} style={{width: '40%'}} />
                {product.id === onSaleId ? (
                    <div>
                        <span style={{textDecoration: 'line-through'}}>{product.price}$</span>
                        <p style={{color: 'red', display: 'inline-block', marginLeft: '10px'}}>{product.price * (1 - sale) }$</p>
                    </div>
                    ) : <p>{product.price}$</p>
                }
                <p>{product.description}</p>
                <button>add to cart</button>
            </div>
            ) : null
        }
    </div>
}

export default Product;