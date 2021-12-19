import {createContext, useReducer} from "react"
import {reducer} from './reducer'

export const ShopContext = createContext()

const initialState = {
    loading: true,
    goods: null,
    orders: [],
    isBasketShow: false,
    alertName: null
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState)

    //Получим данные с сервера
    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }

    // Добавить заказы в корзину
    value.addToBasket = (currentItem) => {
        dispatch({type: 'ADD_TO_BASKET', payload: currentItem})
    }

    // Удалить заказы из корзины
    value.removeFromBasket = (currentItem) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: currentItem}})  //!!!!!!!!!!!!!???????
    }

    // Уменьшить колличесво товаров позиции в корзине
    value.onDecItem = (currentItem) => {
        dispatch({type: 'DEC_ITEM', payload: {id: currentItem}})
    }

    // Увеличить колличесво товаров позиции в корзине
    value.onIncItem = (currentItem) => {
        dispatch({type: 'INC_ITEM', payload: {id: currentItem}})
    }

    // TOGGLE Показать/скрыть корзину
    value.toBasketShow = () => {
        dispatch({type: 'BASKET_SHOW'})
    }

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }

    // отключаем loading
    value.stopLoading = () => {
        dispatch({type: 'STOP_LOADING'})
    }

    //Передадим всем children данные из value
    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}