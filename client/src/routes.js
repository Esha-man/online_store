import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/const";
import Admin from "./pages/Admin"
import Basket from "./pages/Basket";
import Authorization from "./pages/Authorization";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin(),
    },
    {
        path: BASKET_ROUTE,
        Component: Basket(),
    },

]

export const publicRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: Authorization,
    },
    {
        path: LOGIN_ROUTE,
        Component: Authorization,
    },
    {
        path: SHOP_ROUTE,
        Component: Shop,
    },
    {
        path: PRODUCT_ROUTE + "/:id",
        Component: ProductPage,
    },

]