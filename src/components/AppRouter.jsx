import React from 'react';
import { Route, Routes} from "react-router-dom";
import AllCats from './AllCats';
import Favorite from './Favorite';

const AppRouter = () => {

    return (
        <Routes>
            <Route
                path={'/'}
                element={<AllCats />}
                key={1}
            />
            <Route
                path={'/favorite'}
                element={<Favorite />}
                key={2}
            />
            {/* <Route path="*"   key='2'    element={<Error />} /> */}
        </Routes>
    );
};

export default AppRouter;
