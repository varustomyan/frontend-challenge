import React from "react";
import { Route, Routes } from "react-router-dom";
import AllCats from "./AllCats";
import Favorite from "./Favorite";
import Error from "./Error";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<AllCats />} />
      <Route path={"/favorite"} element={<Favorite />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
