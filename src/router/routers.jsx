import { Asosiy,Xizmatlar, Kabinet,Aloqa} from "@pages";

const routers = [
    {
        path: "/",
        element: <Asosiy/>,
        content: "Asosiyyy",
      },
      {
        path: "/xizmatlar",
        element: <Xizmatlar/>,
        content: "Xizmatlar",
      }
     
]

export default routers