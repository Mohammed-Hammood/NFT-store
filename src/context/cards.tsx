"use client";
import { createContext, useState } from "react";
import { CartType, Order, SearchHistoryType } from "types";


type ContextType = {
    loading: boolean;
    setLoading: (value: boolean) => void;
    setCart: (value: CartType[]) => void;
    cart: CartType[];
    order: Order;
    setSearchHistory: (value: SearchHistoryType[]) => void;
    searchHistory: SearchHistoryType[];
    setOrder: (value: Order) => void;
    query: string;
    page:number;
    setPage:(value:number)=> void;
    setQuery: (value: string) => void;
}

const initialValue: ContextType = {
    loading: false,
    setLoading: () => { },
    setCart: () => { },
    setSearchHistory: () => { },
    setOrder: () => { },
    setQuery: () => { },
    setPage: () => { },
    page: 1,
    query: "",
    searchHistory: [],
    cart: [],
    order: Order.default,
}

export const StateContext = createContext<ContextType>(initialValue);


export default function ContextProvider({ children }: { children: React.ReactNode }): React.ReactNode {
    const [loading, setLoading] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('');
    const [cart, setCart] = useState<CartType[]>([]);
    const [order, setOrder] = useState<Order>(Order.default);
    const [searchHistory, setSearchHistory] = useState<SearchHistoryType[]>([]);
    const [page, setPage] = useState<number>(1);

    const values: ContextType = {
        loading,
        order,
        page,
        setPage,
        setQuery,
        query,
        setOrder,
        setSearchHistory,
        searchHistory,
        setLoading,
        cart,
        setCart,
    }
    return (
        <StateContext.Provider value={values}>
            {children}
        </StateContext.Provider>
    )

}