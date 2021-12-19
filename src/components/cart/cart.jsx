import {useContext} from "react"
import {ShopContext} from "../../context"

const Cart = () => {
    const {
        orders,
        toBasketShow = Function.prototype,
    } = useContext(ShopContext);

    const quantity = orders.length

    return(
        <div className='cart blue darken-4 white-text'
            onClick={() => toBasketShow()}
        >
            <i className='material-icons'>shopping_cart</i>
            {
                quantity ? <span className='cart-quantity'>{quantity}</span> : null
            }
        </div>
    )
};

export default Cart;