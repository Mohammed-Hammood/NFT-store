
export enum Order {
    default = "default",
    date = "date",
    expensive = "expensive",
    cheapest = "cheapest",
    popular = "popular",
}

export type SearchHistoryType = {
    id:number;
    name:string;
    image:string;
}

export type CartType = {
    id: number,
    price: number,
    rarity: string;
    title: string;
    category: "premium" | "charity" | "celebrity" | "cybersport" | "art"
    image: string;
    seller: {
        id: number,
        verified: boolean,
        description: string;
        name: string;
        image: string;
    }
}