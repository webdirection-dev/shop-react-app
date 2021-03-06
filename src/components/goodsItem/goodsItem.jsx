import {useContext} from "react";
import {ShopContext} from "../../context"

const GoodsItem = (props) => {
    const {item} = props;
    const {
        id,
        name,
        description,
        price,
        full_background
    } = item;

    const {addToBasket} = useContext(ShopContext)

    return(
        <div id={id} className="card">
            <div className="card-image">
                <img src={full_background} alt={name}/>
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className='btn'
                    onClick={() => addToBasket(item)}
                >Купить</button>
                <span className='right' style={{fontSize: '1.8rem'}}>{price} руб.</span>
            </div>
        </div>
    )
};

export default GoodsItem;