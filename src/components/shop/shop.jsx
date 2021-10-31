import {useState, useEffect} from "react";
import GoodsList from "../goodsList";
import Preloader from "../preloader";

import GoodsService from "../services/goods-service";
const getData = new GoodsService();

const Shop = () => {
    const [goods, setGoods] = useState(null);
    const [loading, setLoading] = useState(true);

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
        <main className="container content">
            {loading ? <Preloader /> : <GoodsList goods={goods}/>}

        </main>
    )
};

export default Shop;