import GoodsItem from "../goodsItem";

const GoodsList = (props) => {
    const {goods = []} = props;

    if (goods === null || !goods.length) return <h4>Ничего не найдено(</h4>

    return(
        <div className='goodsList'>
            {
                goods.map(item => {
                    return <GoodsItem key={item.id} {...item}/>
                })
            }
        </div>
    )
};

export default GoodsList;