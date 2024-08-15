
export interface WindowProps {
    window?: () => Window;
}
export interface workCardProp {
    date: string;
    title: string;
    description: string[];
    tags: string[];
}

export interface projectCardProp {
    name: string;
    imgPath: string;
    description: string;
    link: string;
}