import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import FirstVisit from "../components/FirstVisit";

const HomeLayout = () => {
  const token = true;
  if (!token) return <FirstVisit />;

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default HomeLayout;
