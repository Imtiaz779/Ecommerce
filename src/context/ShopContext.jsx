import { createContext } from "react";
import all_product from "../Utils/all_product";
import new_collections from '../Utils/new_collection';

export const Shopcontext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = { all_product, new_collections };

    return (
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    );
};

export default ShopContextProvider;
