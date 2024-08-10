import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Login from "../components/routes/Login";
import Signup from "../components/routes/Signup";
import Home from "../components/Home";
import HomeLayout from "../layouts/HomeLayout";
import MinivilleRoom from "../components/routes/MinivilleRoom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<HomeLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
      <Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Route>
      <Route>
        <Route path='/miniville_room' element={<MinivilleRoom />} />
      </Route>
    </>
  )
);

export default router;
