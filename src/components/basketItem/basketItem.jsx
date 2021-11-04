const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket,
        onDecItem,
        onIncItem
    } = props;

    return(
        <li className="collection-item">
            <ShowOrderItem
                id={id}
                name={name}
                quantity={quantity}
                price={price}
                onDecItem={onDecItem}
                onIncItem={onIncItem}
            />
            <span className="secondary-content basket-delete"
                  onClick={() => removeFromBasket(id)}
            ><i className="material-icons">close</i></span>
        </li>
    )
};

export default BasketItem;

const ShowOrderItem = ({id, name, quantity, price, onDecItem, onIncItem}) => {
    return(
        <>
            <b>{name}:</b> <button onClick={() => onDecItem(id)}>-</button> {quantity}шт. <button onClick={() => onIncItem(id)}>+</button> x {price}руб. = {price * quantity} руб.
        </>
    )
};