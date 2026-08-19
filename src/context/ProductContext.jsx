import { createContext, useReducer } from "react";

export const ProductContext = createContext();

function ProductProvider({children}){
    return (
        <ProductContext.Provider value={}>
            {children}
        </ProductContext.Provider>
    )
}