import { Dispatch, createContext } from "react";
import { items } from "../assets/Items";

type AppContextTypes = {
    globalCount: number,
    setGlobalCount: Dispatch<number>
    globalPrice: number
    setGlobalPrice: Dispatch<number>
    globalFrete: number
    setGlobalFrete: Dispatch<number>
    itemArray: {
        name: string;
        desc: string;
        image: string;
        price: number;
    }[],
    setItemArray: React.Dispatch<React.SetStateAction<{
        name: string;
        desc: string;
        image: string;
        price: number;
    }[]>>
}

export const AppContext = createContext<AppContextTypes>({
    globalCount: 0,
    setGlobalCount: () => {},
    globalPrice: 0,
    setGlobalPrice: () => {},
    globalFrete: 0,
    setGlobalFrete: () => {},
    itemArray: items,
    setItemArray: () => {},
})