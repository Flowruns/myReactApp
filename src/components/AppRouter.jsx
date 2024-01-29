import React, { useContext } from 'react';
import { Route, Routes, Navigate, useNavigate} from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";
import { AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);

    const navigate = useNavigate();
    
    if (isLoading) {
        return <Loader />
    }

    return (
        <Routes>
            {isAuth
                ? privateRoutes.map(route => (
                    <Route
                        path={route.path}
                        element={<route.component />}
                        key={route.path}
                    />
                ))
                : publicRoutes.map(route => (
                    <Route
                        path={route.path}
                        element={<route.component />}
                        key={route.path}
                    />
                ))}
            {isAuth ? <Navigate to='/posts' /> : <Navigate to='/login' />}
        </Routes>
    );
};

export default AppRouter;