import { Outlet, useLocation } from "react-router-dom";
import FirstVisit from "../components/FirstVisit";
import Header from "../components/Header";
import { Modal } from "../components/common/modal/Modal";
import useAuth from "../zustand/auth";

const excludeHeader = (pathname: string) => {
  const excludePaths = ["/miniville"];
  return excludePaths.some((path) => pathname.startsWith(path));
};

const HomeLayout = () => {
  const { access_token } = useAuth();
  const location = useLocation();
  if (!access_token) return <FirstVisit />;

  return (
    <>
      {!excludeHeader(location.pathname) && <Header />}
      <Outlet />
      <Modal />
    </>
  );
};

export default HomeLayout;
