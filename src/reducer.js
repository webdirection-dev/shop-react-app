export function reducer(state, action) {
    const {type, payload} = action

    switch (type) {

        // получим данные
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false,
            }

        // отключаем loading
        case 'STOP_LOADING':
            return {
                ...state,
                loading: false
            }

        // Добавить заказы в корзину
        case 'ADD_TO_BASKET': {
            const currentIndex = state.orders.findIndex(item => item.id === payload.id)

            let newOrder = null

            if (currentIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1
                };

                newOrder = [...state.orders, newItem];
            } else {
                newOrder = state.orders.map((item, index) => {

                    if (currentIndex === index) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    } else return item;
                });
            }

            return {
                ...state,
                orders: newOrder,
                alertName: payload.name,
            }
        }

        // Удалить заказы из корзины
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                orders: state.orders.filter(item => item.id !== payload.id),
            }

        // Уменьшить колличесво товаров позиции в корзине
        case 'DEC_ITEM':
            return {
                ...state,
                orders: state.orders.map((item) => {
                    if (item.id === payload.id) {
                        const newItemQuantity = item.quantity;
                        return {
                            ...item,
                            quantity: newItemQuantity - 1 >= 0 ? newItemQuantity -1 : 0

                        };
                    } else return item
                })
            }

        // Увеличить колличесво товаров позиции в корзине
        case 'INC_ITEM':
            return {
                ...state,
                orders: state.orders.map((item) => {
                    if (item.id === payload.id) {
                        const newItemQuantity = item.quantity;
                        return {
                            ...item,
                            quantity: newItemQuantity +1

                        };
                    } else return item
                })
            }

        // TOGGLE Показать/скрыть корзину
        case 'BASKET_SHOW':
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            }

        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: null
            }

        default:
            return state;
    }
}