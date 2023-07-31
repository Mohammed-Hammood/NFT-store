import { Order } from "types";

const baseURL = "/api";

export const Endpoints = {
    getCarts: ({ order, query, page }: { order: Order, query: string, page:number }) => `${baseURL}/carts?order=${order}&query=${query}&page=${page}`,
    getSearchHistory: () => `${baseURL}/SearchHistory`
}

export enum AppRoutes {
    register = "/register",
    login = "/login",
    all = "*",
    home = "/",
}