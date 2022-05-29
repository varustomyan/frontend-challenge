import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AllCats from './AllCats';
// import Loader from "./UI/Loader/Loader";
import LikeCats from './LikeCats';

const AppRouter = () => {

    return (
        <Routes>
            <Route
                path={'/all'}
                element={<AllCats />}
                key={1}
            />
            <Route
                path={'/like'}
                element={<LikeCats />}
                key={2}
            />
            {/* <Route path="*"   key='2'    element={<Error />} /> */}
        </Routes>
    );
};

export default AppRouter;
