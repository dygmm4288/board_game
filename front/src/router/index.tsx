import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Login from "../components/routes/Login";
import Signup from "../components/routes/Signup";
import Home from "../components/Home";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HomeLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Route>
  )
);

export default router;
