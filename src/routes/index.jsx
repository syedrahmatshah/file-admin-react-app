/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../component/layout";
import Dashboard from "../pages/Dashboard";
import MyClient from "../pages/MyClient";

const RouteLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/'
            element={<Dashboard />}
          />
          <Route
            path='/my-client'
            element={<MyClient />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteLayout;
