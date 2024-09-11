import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) =>{

    const [cardItems, setCardItem] = useState({});

    const addToCard = (itemId) =>{
        if(!cardItems[itemId]){
            setCardItem((prev)=>({...prev, [itemId]:1}))
        }else{
            setCardItem((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        }
    }
    useEffect(()=>{
        console.log(cardItems);
    },[cardItems]);

    const contextValue = {
        food_list,
        addToCard,
        cardItems,
        setCardItem
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider