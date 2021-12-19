import {useContext} from "react"
import {ShopContext} from "../../context"

import BasketItem from "../basketItem/basketItem";

const BasketList = () => {
    const {
        orders,
        toBasketShow,
    } = useContext(ShopContext)

    const totalPrice = orders.reduce((a, b) => a + (b.price * b.quantity), 0);

    return(
        <ul className="collection z-depth-3 basket-list">
            <li className="collection-item active"><b>Корзина</b></li>
            {
                orders.length ?
                    orders.map(item => <BasketItem
                        key={item.id}
                        {...item}
                    />) :
                    <li className="collection-item"><b>Корзина пока пуста :(</b></li>
            }
            <li className="collection-item active">
                <b>Общая стоимость: {totalPrice} руб.</b>
            </li>

            <li className="collection-item right">
                <button className="btn-small">Оформить</button>
            </li>

            <i
                className='material-icons basket-close'
                onClick={toBasketShow}
            >close</i>
        </ul>
    )
};

export default BasketList;