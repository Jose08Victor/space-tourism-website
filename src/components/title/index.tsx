import { H1 } from "./styles";

export const Title = ({ strong, title }: { strong: number, title: string }) =>
    <H1><strong>0{strong}</strong> {title}</H1>