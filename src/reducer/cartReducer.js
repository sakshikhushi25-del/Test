import { useReducer } from "react";
import React from 'react'

const initialState = {
    cart: []
}

function cartReducer({product, setProduct}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
        switch(action.type) {
            case "ADD_TO_CART":
                return {
                    ...state,
                    
                };
            case "REMOVE_FROM_CART":
                return {
                    
                }
            case "UPDATE_QUANTITY":
                return {

                }
            default:
                return state;
        }
    }
}

export default cartReducer;