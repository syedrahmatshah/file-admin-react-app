/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../component/layout";
import Dashboard from "../pages/Dashboard";

const RouteLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/'
            element={<Dashboard />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteLayout;
