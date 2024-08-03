import "pretendard/dist/web/static/pretendard.css";

import { RouterProvider } from "react-router-dom";
import { Modal } from "./components/common/modal/Modal";
import router from "./router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Modal />
    </>
  );
}

export default App;
