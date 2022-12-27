import { useContext, createContext } from "react";

type ShoppingCartProviderProps = {
        children : ReactNode
}

type ShoppingCartContext = {
    getItemQuantity : (id : number) => number
    increaseCartQuantity : (id : number ) => void
    decreaseCartQuantity : (id : number ) => void
    removeItemFromCart   : (id : number ) => void 
}


const ShoppingCartContext = createContext({});

export const UseShoppingCart= () => {
    return ( useContext(ShoppingCartContext))
}


export const ShoppingCartProvider = ({children} : ShoppingCartProviderProps ) => {
    return (
        <ShoppingCartContext.Provider 
            value={{}}>
                {children}
        </ShoppingCartContext.Provider>
    )
}



