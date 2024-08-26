import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "../components/Home";
import Login from "../components/routes/Login";
import MinivilleRoom from "../components/routes/MinivilleRoom";
import Signup from "../components/routes/Signup";
import HomeLayout from "../layouts/HomeLayout";

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
        <Route path='/miniville_room/:id' element={<MinivilleRoom />} />
      </Route>
    </>,
  ),
);

export default router;
