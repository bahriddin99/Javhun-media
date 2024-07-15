import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";

  import App from "../App";
import { Asosiy,Xizmatlar, Kabinet,Aloqa} from "@pages";

  const router = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<App />}>
          <Route path="/" element={<Asosiy/>}/>
          <Route path="/xizmatlar" element={<Xizmatlar/>}/>
         
        </Route>
      )
    );
    return <RouterProvider router={router} />;
  };
  
  export default router;