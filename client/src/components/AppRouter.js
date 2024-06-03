import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import { Navigate } from 'react-router-dom';
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component} element={<Navigate to={SHOP_ROUTE}/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component} element={<Navigate to={SHOP_ROUTE}/>} exact/>
            )}
        </Routes>
    );
};
// element={<Navigate to={SHOP_ROUTE}/>}
export default AppRouter;