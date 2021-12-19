import {useContext} from "react";
import {ShopContext} from "../../context";

import GoodsItem from "../goodsItem";

const GoodsList = () => {
    const {
        goods = [],
    } = useContext(ShopContext);

    if (goods === null || !goods.length) return <h4>Ничего не найдено(</h4>

    return(
        <div className='goodsList'>
            {
                goods.map(item => {
                    return <GoodsItem key={item.id} item={item}/>
                })
            }
        </div>
    )
};

export default GoodsList;