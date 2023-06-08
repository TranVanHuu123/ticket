import React from "react";

import "./App.css";
import Shared from "./page/Shared";
import { Route, Routes } from "react-router";
import MainListTicket from "./page/MainListTicket";
import HomePage from "./page/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Shared></Shared>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>

          <Route
            path="/manage"
            element={<MainListTicket></MainListTicket>}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
