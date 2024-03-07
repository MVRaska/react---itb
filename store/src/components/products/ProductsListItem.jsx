import { Link } from "react-router-dom";
import { onSaleId, sale } from "../views/Home";

const ProductsListItem = ({product}) => {

    return <div>
        <Link to={`/products/${product.id}`} style={{textDecoration: 'none'}}>
            <div>
                <p>{product.title}</p>
                <img src={product.image} style={{width: '40%'}} />
                
            </div>
        </Link>
        {product.id === onSaleId ? (
            <div>
                <span style={{textDecoration: 'line-through'}}>{product.price}$</span>
                <p style={{color: 'red', display: 'inline-block', marginLeft: '10px'}}>{product.price * (1 - sale) }$</p>
            </div>
            ) : <p>{product.price}$</p>
        }
    </div>
}

export default ProductsListItem;