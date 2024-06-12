import AuthProvider from "./AuthContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router.jsx";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
