import { Route, Routes } from "react-router-dom";

import Incio from "../Pages/Incio";
import Login from "../Pages/Login";
import Sign from "../Pages/Sign";

export default function routes() {
  return (
    <Routes>
      <Route path="/" exact component={Incio} />
      <Route path="/sign" component={Sign} />
      <Route path="/login" component={Login} />
    </Routes>
  );
}
