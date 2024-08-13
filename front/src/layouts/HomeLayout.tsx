import { Outlet } from "react-router-dom";
import FirstVisit from "../components/FirstVisit";
import Header from "../components/Header";
import useAuth from "../zustand/auth";

const HomeLayout = () => {
  const { access_token } = useAuth();
  if (!access_token) return <FirstVisit />;

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default HomeLayout;
