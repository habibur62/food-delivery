import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);
let itemCount = 0;
const StoreContextProvider = (props) =>{

    const [cardItems, setCardItem] = useState({});

    const addToCard = (itemId) =>{
        if(!cardItems[itemId]){
            itemCount +=1;
            setCardItem((prev)=>({...prev, [itemId]:1}))
        }else{
            setCardItem((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart = (itemId) =>{
        setCardItem((prev)=>({...prev, [itemId]:prev[itemId]-1}))

    }

    useEffect(()=>{
    },[cardItems]);

    const contextValue = {
        food_list,
        addToCard,
        cardItems,
        setCardItem,
        removeFromCart,
        itemCount

    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider