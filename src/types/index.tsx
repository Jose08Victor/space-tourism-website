export interface Idata {
    destinations: {
        name: string;
        image: string;
        description: string;
        distance: string;
        travel: string;
    }[];
    crew: {
        name: string;
        image: string;
        role: string;
        bio: string;
    }[];
    technology: {
        name: string;
        images: {
            portrait: string;
            landscape: string;
        };
        description: string;
    }[];
}[]

export interface ContextType {
    data: Idata;
}