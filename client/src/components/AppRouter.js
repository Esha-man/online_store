import React from 'react';
import {NavLink, Route, Routes} from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import Authorization from "../pages/Authorization";
import {authRoutes, publicRoutes} from "../routes"

export const AppRouter = () => {
    const isAuth = false
    return (
        <div>
            <NavLink to={"/"}>ProductPage</NavLink>
            <NavLink to={"/auth"}>Authorization</NavLink>
            <Routes>
                {authRoutes.map( (el) =>
                    // console.log(el.Component)
                    <Route key={el.path} path={el.path} element={el.Component}/>
                )}
                {/*{publicRoutes.map(({path, Component}) =>*/}
                {/*  <Route key={path} path={path} element={Component}/>*/}
                {/*)}*/}
                {/*<Route path={"/"} element={<ProductPage/>}/>*/}
                {/*<Route path={"/auth"} element={<Authorization/>}/>*/}
            </Routes>

        </div>
    );
};

// export default AppRouter;