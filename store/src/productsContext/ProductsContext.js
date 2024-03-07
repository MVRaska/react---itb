import { createContext, useReducer } from "react";
import productsReducer, {initialState} from '../productsReducer/productsReducer';

export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {
    const [state, productsDispatch] = useReducer(productsReducer, initialState);

    return <>
        <ProductsContext.Provider value={{state, productsDispatch}}>{children}</ProductsContext.Provider>
    </>
}

export default ProductsContextProvider;