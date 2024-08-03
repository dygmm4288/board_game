import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HomeLayout />}>
      <Route path='/' element={<Home />} />
    </Route>
  )
);

export default router;
