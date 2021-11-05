import {useEffect} from "react";

const Alerts = (props) => {
    const {
        name = null,
        closeAlert = Function.prototype,
    } = props;

    // componentDidUpdate
    useEffect(() => {
        const timerId = setTimeout(() => closeAlert(), 3000);

        // componentDidUnmount
        return () => clearTimeout(timerId)
        // eslint-disable-next-line
    }, [name]);

    return(
        <div id="toast-container">
            <div className="toast">
                {name} добавлен в корзину
            </div>
        </div>
    )
};
export default Alerts;