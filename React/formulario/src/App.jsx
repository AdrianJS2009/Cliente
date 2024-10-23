import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/HomePage";
import BigLayout from "./pages/BigLayout";
import Error from "./pages/ErrorPage";

import FormWithRef from "./pages/FormWithRef";
import FormWithState from "./pages/FormWithState";

const routeDefinition = createRoutesFromElements(
  <Route path="/" element={<BigLayout />} errorElement={<Error />}>
    <Route index element={<Home />} />

    <Route path="formState" element={<FormWithState />} />
    <Route path="formRef" element={<FormWithRef />} />

    {/*  <Route path="login" element={<AuthForm type="login" />} />
    <Route path="register" element={<AuthForm type="register" />} /> */}
  </Route>
);

const router = createBrowserRouter(routeDefinition);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
