export default interface IRoute {
    key: string;
    name: string,
    path?: string,
    page?: React.ReactNode,
    icon?: React.ReactNode,
    children?: Array<IRoute>,
    role?: Array<string>,
    hide?: boolean
};