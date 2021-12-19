import {useEffect, useContext} from "react"
import {ShopContext} from "../context";

const Alerts = () => {
    const {
        alertName = null,
        closeAlert = Function.prototype,
    } = useContext(ShopContext);

    // componentDidUpdate
    useEffect(() => {
        const timerId = setTimeout(() => closeAlert(), 3000);

        // componentDidUnmount
        return () => clearTimeout(timerId)
        // eslint-disable-next-line
    }, [alertName]);

    return(
        <div id="toast-container">
            <div className="toast">
                {alertName} добавлен в корзину
            </div>
        </div>
    )
};
export default Alerts;