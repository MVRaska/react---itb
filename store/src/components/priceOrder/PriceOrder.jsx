
const PriceOrder = ({handlePriceOrder}) => {

    return <>
        <select onChange={handlePriceOrder} className='orderByPrice'>
            <option value='' selected hidden>Sort by price</option>
            <option value='ascending'>ascending</option>
            <option value='descending'>descending</option>
        </select>
    </>
}
 export default PriceOrder;