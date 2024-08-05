import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home";
import MinivilleRoom from "../components/MinivilleRoom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HomeLayout />}>
      <Route path='/' element={<MinivilleRoom />} />
    </Route>
  )
);

export default router;
