import React from "react";

import "./App.css";
import Shared from "./page/Shared";
import { Route, Routes } from "react-router";
import MainListTicket from "./page/MainListTicket";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Shared></Shared>}>
          <Route path="/" element={<MainListTicket></MainListTicket>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
