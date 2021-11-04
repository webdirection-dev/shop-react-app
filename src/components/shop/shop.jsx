import {useState, useEffect} from "react";
import GoodsList from "../goodsList";
import Preloader from "../preloader";
import Cart from "../cart";
import BasketList from "../basketList";

import GoodsService from "../services/goods-service";
const getData = new GoodsService();

const Shop = () => {
    const [loading, setLoading] = useState(true);
    const [goods, setGoods] = useState(null);
    const [orders, setOrders] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);

    // Добавить заказы в корзину
    const addToBasket = (currentItem) => {
        const currentIndex = orders.findIndex(item => item.id === currentItem.id);

        if (currentIndex < 0) {
            const newItem = {
                ...currentItem,
                quantity: 1
            };

            setOrders([...orders, newItem]);
        } else {
            const newOrder = orders.map((item, index) => {
                if (currentIndex === index) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                } else return item;
            });

            setOrders(newOrder);
        }
    };

    // Удалить заказы из корзины
    const removeFromBasket = (currentItem) => {
        const newOrder = orders.filter(item => item.id !== currentItem);

        setOrders(newOrder);
    };

    // Уменьшить колличесво товаров позиции в корзине
    const onDecItem = (currentItem) => {
        const newOrder = orders.map((item) => {

            if (item.id === currentItem) {
                if (item.quantity <= 0) item.quantity = 0;
                else item.quantity -= 1;

                return item;
            } else return item;
        })

        setOrders(newOrder)
    };

    // Увеличить колличесво товаров позиции в корзине
    const onIncItem = (currentItem) => {
        const newOrder = orders.map((item) => {

            if (item.id === currentItem) {
                item.quantity += 1;

                return item;
            } else return item;
        })

        setOrders(newOrder)
    };

    // TOGGLE Показать/скрыть корзину
    const toBasketShow = () => {
        setBasketShow(!isBasketShow);
    };

    // componentDidMount
    useEffect(() => {
        getData.getGoodsList()
            .then(response => {
                //передаем список товаров в useState
                response.featured && setGoods(response.featured);
                // отключаем loading
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, []);

    return(
        <View
            loading={loading}
            goods={goods}
            orders={orders}
            addToBasket={addToBasket}
            isBasketShow={isBasketShow}
            toBasketShow={toBasketShow}
            removeFromBasket={removeFromBasket}
            onDecItem={onDecItem}
            onIncItem={onIncItem}
        />
    )
};

export default Shop;

const View = (props) => {
    const {
        loading,
        goods,
        orders,
        addToBasket,
        isBasketShow,
        toBasketShow,
        removeFromBasket,
        onDecItem,
        onIncItem
    } = props;
    return(
        <main className="container content">
            {
                orders.length !== 0 ?
                    <Cart
                        quantity={orders.length}
                        toBasketShow={toBasketShow}
                    /> : null
            }

            {
                loading ? <Preloader /> :
                    <GoodsList
                        goods={goods}
                        addToBasket={addToBasket}
                        toBasketShow={toBasketShow}
                    />
            }

            {
                isBasketShow ? <BasketList
                    orders={orders}
                    toBasketShow={toBasketShow}
                    removeFromBasket={removeFromBasket}
                    onDecItem={onDecItem}
                    onIncItem={onIncItem}
                /> : null
            }
        </main>
    )
};