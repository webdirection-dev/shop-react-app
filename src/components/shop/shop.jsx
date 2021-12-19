import {useEffect, useContext} from "react";
import {ShopContext} from "../../context";

import GoodsList from "../goodsList";
import Preloader from "../preloader";
import Cart from "../cart";
import BasketList from "../basketList";
import Alerts from "../../alerts/alerts";

import GoodsService from "../services/goods-service";
const getData = new GoodsService();

const Shop = () => {
    const {
        loading,
        setGoods,
        orders,
        isBasketShow,
        alertName,
    } = useContext(ShopContext)

    // componentDidMount
    useEffect(() => {
        getData.getGoodsList()
            .then(response => {
                //передаем список товаров в useState
                setGoods(response.featured);
            })
            .catch(error => console.error(error));
    // eslint-disable-next-line
    }, []);

    return(
        <View
            loading={loading}
            orders={orders}
            isBasketShow={isBasketShow}
            alertName={alertName}
        />
    )
};

export default Shop;

const View = (props) => {
    const {
        loading,
        orders,
        isBasketShow,

        alertName,
    } = props;

    return(
        <main className="container content">
            {
                orders.length !== 0 ?
                    <Cart
                        quantity={orders.length}
                    /> : null
            }

            {
                loading ? <Preloader /> :
                    <GoodsList />
            }

            {
                isBasketShow ? <BasketList /> : null
            }

            {
                alertName ? <Alerts /> : null
            }
        </main>
    )
};