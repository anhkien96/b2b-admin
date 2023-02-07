import IRoute from "./routes/iRoute";
import routes from "./routes";

interface IUser {
    name: string;
    isLogined: boolean;
    role: string;
}

const createUserRoutes = (user: IUser, routes: Array<IRoute>) => {
    routes.forEach((r: IRoute) => {
       if (r.children && r.children.length) createUserRoutes(user, r.children);
       else if (r.roles && r.roles.length && !r.roles.includes(user.role)) r.userHide = true;
    });
    return routes;
};

export const user: IUser = {
    name: 'Kiên Nguyễn',
    isLogined: true,
    role: 'admin'
};

export const userRoutes = createUserRoutes(user, routes); 