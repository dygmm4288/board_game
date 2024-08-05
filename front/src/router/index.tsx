import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import MinivilleRoom from "../components/MinivilleRoom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
    <Route path='/' element={<HomeLayout />}>
      <Route path='/' element={<MinivilleRoom />} />
    </Route>
    <Route path='/login' element={<Login />}/>
    </Routes>
  )
);

export default router;
