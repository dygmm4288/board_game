import "pretendard/dist/web/static/pretendard.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Modal } from "./components/common/modal/Modal";
import router from "./router";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Modal />
    </QueryClientProvider>
  );
}

export default App;
